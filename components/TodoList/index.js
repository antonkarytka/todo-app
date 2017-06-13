import React, { Component } from 'react';

import TodoItem from '../TodoItem/index';
import './styles.css';

class TodoList extends Component {

    render() {
        let todoIndex = 0;
        return (
            <ul>
                {
                    this.props.todos.map(item => {
                        todoIndex++;
                        return <TodoItem key={ item.keyDate } todo={ item } todoIndex={todoIndex} checkTodoItem={ this.props.checkTodoItem } removeTodoItem={ this.props.removeTodoItem } />
                    })
                }
            </ul>
        );
    }
}

export default TodoList;
