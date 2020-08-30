import React, {Component} from 'react';
import { Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';

import Header from './Header';
import Home from './Home';

import ShoppingItemList from './shoppingItem/ShoppingItemList';
import ShoppingItemCreate from './shoppingItem/ShoppingItemCreate';

import history from '../history'

class App extends Component {
    componentDidMount(){
        this.props.fetchUser()
    }
    render(){
        return (
            <div className="container">
                <Router history={history}>
                    <div>
                        <Header />
                        <Route exact path='/' component={Home} />
                        <Route exact path='/ShoppingList' component={ShoppingItemList} />
                    </div>
                </Router>
            </div>
        );
    }
};


export default connect(null,actions)(App);