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
            creationDate: `${time}, ${date.toDateString()}`,
            keyDate: Date.now()
        });
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
                <TodoList todos={ this.state.todos } removeTodoItem={ this.removeTodoItem.bind(this) }/>
            </div>
        );
    }
}

export default App;
