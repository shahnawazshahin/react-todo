import React, { Component } from 'react';

import Button from '../libs/Button';
import Form from '../libs/Form';
import Textbox from '../libs/Textbox';
import '../Application.css';

class AddTodo extends Component {
    constructor(props) {
        super(props);

        this.addTodo = this.addTodo.bind(this);

        this.state = { todoItem: ''};
    }

    _handleChange(event) {
        this.setState( {todoItem: event.target.value} );
    } 

    addTodo(event) {
        event.preventDefault();
        if (this.state.todoItem !== '') {
            this.props.addTodo(this.state.todoItem);
            this.setState({ todoItem: ''} );
        }
    }

    render() {
        return (
            <Form onSubmit={(event) => this.addTodo(event)}>
                <Textbox placeholder={this.props.todoMessage} value={this.state.todoItem} onChange={(event) => this._handleChange(event)}/>
                <Button>Add Todo</Button>
            </Form>
        )
    }
}

export default AddTodo;