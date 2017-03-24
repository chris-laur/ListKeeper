import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as CartActions from '../actions/cart';
import Shelf from './shelf';
import { IconButton, Table, TableHeader } from 'react-mdl';

class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  itemsInCart = function() {
        let itemsList;
        this.props.cart.forEach(function (value) {
            let existingItem = this.find(function(itm) { return itm.id === value.id });
            if (existingItem) {
              existingItem.qty++;
            } else {
              value.qty = 1;
              this.push(value);
            }
        }, itemsList = []);
        return itemsList;
    };

  render() {
    
    const renderItem = (cellValue, row, rowIndex) => {
        console.log(row);
        return (
        <div>
          <IconButton onClick={ () => this.props.actions.removeFromCart({}) } name="remove" style={{color: '#9CC5A1'}} />
        </div>
      );
    }

    return (
      <div className="Cart">
        <Shelf addItem={this.props.actions.addToCart}/>
        
        <div style={{margin: '40px'}}>
          <Table style={{width: '400px'}}
            sortable 
            shadow={0} 
            rowKeyColumn="id" 
            rows={this.props.cart}>
                <TableHeader 
                    style={{color: '#fff', background: '#49A078'}}
                    cellFormatter={renderItem}
                    name="remove">
                </TableHeader>
                <TableHeader 
                    style={{color: '#fff', background: '#49A078'}}
                    name="qty">
                    Qty
                </TableHeader>
                <TableHeader 
                    style={{color: '#fff', background: '#49A078'}}
                    name="name">
                    List
                </TableHeader>
            </Table>
        </div>

      </div>
    );
  }
}
function mapStateToProps(state, props) {
    return {
        cart: state.cart
    };
}
function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(CartActions, dispatch)
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Cart);