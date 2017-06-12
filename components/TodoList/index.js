import React, { Component } from 'react';

import TodoItem from '../TodoItem/index';
import './styles.css';

class TodoList extends Component {

    render() {
        return (
            <ul>
                {
                    this.props.todos.map(item => {
                        return <TodoItem key={ item.keyDate } todo={ item } checkTodoItem={ this.props.checkTodoItem } removeTodoItem={ this.props.removeTodoItem } />
                    })
                }
            </ul>
        );
    }
}

export default TodoList;
