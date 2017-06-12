import React, { Component } from 'react';

class TodoItem extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <li>{ this.props.todo.text } : {this.props.todo.date}</li>
        );
    }
}

export default TodoItem;
