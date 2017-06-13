import React, { Component } from 'react';

import './styles.css';
import './checkbox.scss';

class TodoItem extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        const todoText = this.props.todo.text;
        const index = this.props.todoIndex;
        const lineThroughText = this.props.todo.lineThroughText;
        const todoCreationDate = this.props.todo.creationDate;
        const todoKeyData = this.props.todo.keyDate;

        return (
            <div className="todo">
                <hr/>
                <li>
                    <table>
                        <tbody>
                            <tr>
                                <td className="todo-check">
                                    <input type="checkbox" ref="checkTodo" id={`check-${index}`} onClick={ () => { this.props.checkTodoItem(this.refs.checkTodo.checked, todoKeyData) } } />
                                    <label htmlFor={`check-${index}`}>
                                        <span/>
                                    </label>
                                </td>
                                <td className={`todo-text`}>
                                    <span className={lineThroughText}>
                                        { todoText }
                                    </span>
                                </td>
                                <td className="todo-delete">
                                    <input type="checkbox" onClick={ () => { this.props.removeTodoItem(todoKeyData) } }/>
                                </td>
                            </tr>
                            <tr>
                                <td colSpan={3} className="todo-creation-date">
                                    { todoCreationDate }
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </li>
            </div>
        );
    }
}

export default TodoItem;

