import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ShoppingItemList extends Component {
    render(){
        return(
            <div>CREATE SHOPPING ITEM
                <Link to="/ShoppingItemNew">Create New Item</Link>
            </div>
        )
    }
}

export default ShoppingItemList