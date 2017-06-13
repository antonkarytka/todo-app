import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css'
import InputTodoItem from '../InputTodoItem/index';
import TodoList from '../TodoList/index';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = { todos: [] }
    }

    addTodoItem(todoText) {
        const todos = this.state.todos;
        const date = new Date();
        const time = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
        todos.push({
            text: todoText,
            lineThroughText: null,
            creationDate: `${time}, ${date.toDateString()}`,
            keyDate: Date.now()
        });
        this.setState({ todos: todos });
    }

    checkTodoItem(checked, uniqueCreationDate) {
        const todos = this.state.todos;
        console.log(uniqueCreationDate);
        if (checked) {
            todos.map(todo => {
                if (todo.keyDate === uniqueCreationDate) {
                    todo.lineThroughText = 'line-through-text';
                }
            });
        } else {
            todos.map(todo => {
                if (todo.keyDate === uniqueCreationDate) {
                    todo.lineThroughText = null;
                }
            });
        }
        this.setState({ todos: todos });
    }

    removeTodoItem(uniqueCreationDate) {
        const todos = this.state.todos;

        todos.map(todo => {
           if (todo.keyDate === uniqueCreationDate) {
               const deletionIndex = todos.indexOf(todo);
               todos.splice(deletionIndex, 1);
           }
        });
        this.setState({ todos: todos });
    }

    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">Your TODOs</h1>
                </div>
                <InputTodoItem addTodoItem={ this.addTodoItem.bind(this) }/>
                <TodoList todos={ this.state.todos } checkTodoItem={ this.checkTodoItem.bind(this) } removeTodoItem={ this.removeTodoItem.bind(this) }/>
            </div>
        );
    }
}

export default App;
