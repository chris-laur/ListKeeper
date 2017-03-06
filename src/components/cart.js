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

  render() {
    
    const renderItem = (name) => {
        return (
        <div>
          <IconButton name="remove" style={{color: '#216869'}} /> {name}
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
                    style={{background: '#9CC5A1'}}
                    cellFormatter={renderItem}
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