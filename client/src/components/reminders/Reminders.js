import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchTodos } from '../../actions'

import Reminder from './Reminder';

class Reminders extends Component {
    state = {reminders: ["Gets some milk", "take out the trash", "Change the cat"]}
    
    componentDidMount(){
        this.props.fetchTodos();
    }

    renderToDos = () => {
        return this.state.reminders.map((reminder, index) => {
            return <Reminder key={index} toDo={reminder} />
        });    
    }
    
    render(){
        return(
            <div>
                <h4>Here are your reminders/todos for today:</h4>
                <ul>
                    {this.renderToDos()}
                </ul>
            </div>
        )
    }
}

const mapStateToProps = state =>{
    return {todos: state.todos}
}

export default connect(mapStateToProps, { fetchTodos })(Reminders)

