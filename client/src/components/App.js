import React, {Component} from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';

import Header from './Header';
import Home from './Home';

import ShoppingItemList from './shoppingItem/ShoppingItemList';
import ShoppingItemCreate from './shoppingItem/ShoppingItemCreate';

class App extends Component {
    componentDidMount(){
        this.props.fetchUser()
    }
    render(){
        return (
            <div className="container">
                <BrowserRouter>
                    <div>
                        <Header />
                        <Route exact path='/' component={Home} />
                        <Route exact path='/ShoppingList' component={ShoppingItemList} />
                        <Route exact path='/ShoppingItemNew' component={ShoppingItemCreate} />
                    </div>
                </BrowserRouter>
            </div>
        );
    }
};


export default connect(null,actions)(App);