import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Reminders extends React.Component {
    render(){
        return(
            <li>{this.props.toDo} - <a href="#">Done</a></li>
        )
    }
}

export default Reminders