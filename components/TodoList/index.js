import React, { Component } from 'react';

import TodoItem from '../TodoItem/index';
import './styles.css';

class TodoList extends Component {

    removeTodoItem(index) {
        const updatedTodoList = this.props.todos.splice(index, 1);
    }

    render() {
        return (
            <ul>
                {
                    this.props.todos.map(item => {
                        return <TodoItem key={item.keyDate} todo={ item } />
                    })
                }
            </ul>
        );
    }
}

export default TodoList;
