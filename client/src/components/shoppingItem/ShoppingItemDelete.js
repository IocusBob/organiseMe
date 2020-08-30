import React, { Component } from 'react'
import { connect } from 'react-redux';

import {deleteShoppingItems} from '../../actions'

class ShoppingItemDelete extends Component {
    deleteAll = () => {
        this.props.deleteShoppingItems(this.props.shoppingList);
    }

    deleteSelected = () => {
        const itemsToDelete = this.props.shoppingList.filter(shoppingItem => {
            return shoppingItem.checked;
        })
        this.props.deleteShoppingItems(itemsToDelete);
    }

    render() {
        return(
            <div className="d-flex justify-content-around mt-3">
                <button onClick={this.deleteSelected} className="btn btn-warning">Delete Selected</button>
                <button onClick={this.deleteAll} className="btn btn-danger">Delete everything</button>
            </div>
        )
    }
};


export default connect(null, {deleteShoppingItems})(ShoppingItemDelete)