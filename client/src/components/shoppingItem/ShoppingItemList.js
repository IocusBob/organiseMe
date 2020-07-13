import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchShoppingItems } from '../../actions';


class ShoppingItemList extends Component {

    componentDidMount(){
        this.props.fetchShoppingItems();
    }

    renderShoppingList = () => {
        return this.props.shoppingList.map(shoppingItem => {
            return <div key={shoppingItem._id}>{shoppingItem.item}</div>
        });
    }

    render(){
        return(
            <div>
                {this.renderShoppingList()}
                <Link to="/ShoppingItemNew">Create New Item</Link>
            </div>
        )
    }
}

function mapStateToProps({shoppingList}){
    return { shoppingList };
}

export default connect(mapStateToProps, {fetchShoppingItems})(ShoppingItemList)
