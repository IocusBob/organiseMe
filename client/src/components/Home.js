import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Reminders from './reminders/Reminders';

class Header extends Component {
    renderContent() {
        switch(this.props.auth){
            case null:
                return;
            case false:
                return <li className="nav-item"><a href="/auth/google" className="nav-link" >Login with Google</a></li>
            default:
                return <li className="nav-item"><a href="/api/logout" className="nav-link" >Logout</a></li>
        }
    }
    render(){
        return(
            <div className="container">
                <div>
                    <h4>The weather today will be: sunny</h4>
                </div>
                <div>
                    <h4>The time is 5:54</h4>
                </div>
                <h1>Things you need to do today</h1>
                <Reminders />
                <div>
                    <h4>Stuff in your calender:</h4>
                    <p><strong>Your next appointment is in 3 hours and 9 minutes</strong></p>
                    <ul>
                        <li>12:00pm - The Meeting thats really important</li>
                        <li>3:15pm - Day to pick up kids from school</li>
                        <li>8:00pm - Watch coronation street (jk...)</li>
                    </ul>
                </div>
                <div>
                    <h4>Stuff in your calender for tomorrow:</h4>
                    <ul>
                        <li>11:00am - The Meeting thats less important that yesterdays</li>
                        <li>3:00 - Tell Sam I have the package</li>
                        <li>8:00pm - Watch lost to find out whats in the hatch</li>
                    </ul>
                </div>
                <div>
                    <h4>Current Items in your shopping list:</h4>
                    <ul>
                        <li>Snacks</li>
                        <li>Vegetables</li>
                        <li>Pizza</li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Header;