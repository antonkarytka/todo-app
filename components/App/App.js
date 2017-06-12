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

    addTodoItem(value) {
        const todos = this.state.todos;
        const date = new Date();
        const time = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
        todos.push({
            text: value,
            date: `${time}, ${date.toDateString()}`
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
                <TodoList todos={ this.state.todos } />
            </div>
        );
    }
}

export default App;
