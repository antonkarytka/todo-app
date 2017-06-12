import React, { Component } from 'react';

import './styles.css';

class InputTodoItem extends Component {

    constructor(props) {
        super(props);
    }

    handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            this.props.addTodoItem(this.refs.EnteredTodo.value);
            this.refs.EnteredTodo.value = '';
        }
    };

    render() {
        return (
            <input ref="EnteredTodo" className="InputTodo" type="text" placeholder="Enter your TODO..." autoFocus onKeyPress={this.handleKeyPress} />
        );
    }
}

export default InputTodoItem;
