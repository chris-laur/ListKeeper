import React, { Component } from 'react';
import { IconButton, Icon, List, ListItem, ListItemAction, ListItemContent, Table, TableHeader } from 'react-mdl';

class Shelf extends Component {
  constructor(props) {
    super(props);
    this.onAddItemToCart = this.onAddItemToCart.bind(this);
    this.state = {
      shelfItems: [ 
        { id: 1, item: 'Shampoo' },
        { id: 2, item: 'Yogurt' },
        { id: 3, item: 'Chocolate' }
      ]
    }
  }
  onAddItemToCart(item) {
      this.props.addItem(item);
  }
  render() {
    
    const renderItem = (item) => {
        return (
        <div onClick={() => this.onAddItemToCart(item)}>
          <IconButton name="add" style={{color: '#216869'}} /> {item}
        </div>
      );
    }
    
    return (
      <div style={{margin: '40px'}}>
          <Table style={{width: '400px'}}
            sortable 
            shadow={0} 
            rowKeyColumn="id" 
            rows={this.state.shelfItems}>
            <TableHeader 
                style={{background: '#9CC5A1'}}
                cellFormatter={renderItem}
                name="item"
                tooltip="Item to add to the list">
                Item
            </TableHeader>
        </Table>
      </div>
    );
  }
}
export default Shelf;