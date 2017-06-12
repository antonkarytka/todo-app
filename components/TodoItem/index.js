import React, { Component } from 'react';

import './styles.css';

class TodoItem extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        const todoText = this.props.todo.text;
        const todoCreationDate = this.props.todo.creationDate;
        const todoKeyData = this.props.todo.keyDate;

        return (
            <div className="todo">
                <hr/>
                <li>
                    <table>
                        <tbody>
                        <tr>
                            <td className="todo-check"><input type="checkbox"/></td>
                            <td className="todo-text">{ todoText }</td>
                            <td className="todo-delete"><input type="checkbox" onClick={ () => { this.props.removeTodoItem(todoKeyData) } }/></td>
                        </tr>
                        <tr>
                            <td colSpan={3} className="todo-creation-date">{ todoCreationDate }</td>
                        </tr>
                        </tbody>
                    </table>
                </li>
            </div>
        );
    }
    }

    export default TodoItem;

