import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import ShoppingItemCreate from './ShoppingItemCreate';
import { fetchShoppingItems, updateShoppingItemChecked } from '../../actions';


class ShoppingItemList extends Component {

    componentDidMount(){
        this.props.fetchShoppingItems();
    }

    handleChangeChk = (event) => {
        const { name, checked } = event.target;
        this.props.updateShoppingItemChecked(name, checked)
    }    

    renderShoppingList = () => {
        return this.props.shoppingList.map(shoppingItem => {
            return (
                <li className="d-flex list-group-item" key={shoppingItem._id}>
                    <span className="col-3">{shoppingItem.quantity}</span>
                    {shoppingItem.checked ? (
                        <span className="col-6"><del>{shoppingItem.item}</del></span>
                        ) : (
                            <span className="col-6">{shoppingItem.item}</span>
                        )
                    }
                    <span className="col-3">
                        <input type="checkbox" defaultChecked={ shoppingItem.checked } name={shoppingItem._id} onChange={this.handleChangeChk}/>
                    </span>
                </li>
            )
        });
    }

    render(){
        return(
            <div>
                <div className="col-8 mt-3 pl-0">
                    <ul className="list-group">
                        <li className="d-flex list-group-item">
                            <span className="col-3 font-weight-bolder">Quantity</span>
                            <span className="col-6 font-weight-bolder">Item</span>
                            <span className="col-3 font-weight-bolder">Checked</span>
                        </li>
                        {this.renderShoppingList()}
                        <li className="list-group-item"><ShoppingItemCreate /></li>
                    </ul>
                    <Link to="/ShoppingItemNew">Create New Item</Link>
                </div>
            </div>
        )
    }
}

function mapStateToProps({shoppingList}){
    return { shoppingList };
}

export default connect(mapStateToProps, {fetchShoppingItems, updateShoppingItemChecked})(ShoppingItemList)
