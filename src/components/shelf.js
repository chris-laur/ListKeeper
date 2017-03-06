import React, { Component } from 'react';
import { IconButton, Table, TableHeader } from 'react-mdl';

class Shelf extends Component {
  constructor(props) {
    super(props);
    this.onAddItemToCart = this.onAddItemToCart.bind(this);
    this.state = {
      shelfItems: [ 
        { id: 1, name: 'Shampoo' },
        { id: 2, name: 'Yogurt' },
        { id: 3, name: 'Chocolate' }
      ]
    }
  }
  onAddItemToCart(item) {
      this.props.addItem(item);
  }
  render() {
    
    const renderItem = (name) => {
        let id = this.state.shelfItems.find((item) => { return item.name === name }).id;
        return (
        <div onClick={() => this.onAddItemToCart({id, name})}>
          <IconButton name="add" style={{color: '#216869'}} /> {name}
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
                name="name"
                tooltip="Item to add to the list">
                Item
            </TableHeader>
        </Table>
      </div>
    );
  }
}
export default Shelf;