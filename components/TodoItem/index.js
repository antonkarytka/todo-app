import React, { Component } from 'react';

import './styles.css';
import './checkboxCheck.scss';
import './checkboxDelete.scss';

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
                                    <input type="checkbox" className="check" ref="checkTodo" id={`check-${index}`} onClick={ () => { this.props.checkTodoItem(this.refs.checkTodo.checked, todoKeyData) } } />
                                    <label className="check-label" htmlFor={`check-${index}`}>
                                        <span className="check-span"/>
                                    </label>
                                </td>
                                <td className={`todo-text`}>
                                    <span className={lineThroughText}>
                                        { todoText }
                                    </span>
                                </td>
                                <td className="todo-delete">
                                    <input type="checkbox" className="delete" id={`delete-${index}`} onClick={ () => { this.props.removeTodoItem(todoKeyData) } }/>
                                    <label className="delete-label" htmlFor={`delete-${index}`}>
                                        <span className="delete-span"/>
                                    </label>
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

