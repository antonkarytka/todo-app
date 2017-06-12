import React, { Component } from 'react';

import './styles.css';

class TodoItem extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        const todoText = this.props.todo.text;
        const todoCreationDate = this.props.todo.creationDate;
        return (
        <div className="todo">
            <hr/>
            <li className="todo-text">{ todoText }</li>
            <h7 className="todo-creation-date">{ todoCreationDate }</h7>
        </div>
    );
    }
    }

    export default TodoItem;

