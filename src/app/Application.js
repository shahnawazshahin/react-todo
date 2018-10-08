import React, { Component } from 'react';

import AddTodo from './components/AddTodo';
import Body from './libs/Body';
import Container from './libs/Container';
import Header from './libs/Header';
import Heading from './components/Heading';
import Todos from './components/Todos';

class Application extends Component {
    constructor(props) {
        super(props);

        this.addTodo = this.addTodo.bind(this);
        this.removeTodo = this.removeTodo.bind(this);
        this.toggleDone = this.toggleDone.bind(this);

        this.state = {
            todos: [
                { item: 'Bread', done: false },
                { item: 'Almond butter', done: true },
                { item: 'Jam', done: false },
            ],
            defaultTodoMessage: 'Start adding Todo item...'
        };
    }

    addTodo(item) {
        this.setState(
            {todos: [...this.state.todos, { item: item, done: false }]}
        );
    }

    removeTodo(index) {
        const stateTodos = [...this.state.todos];
        stateTodos.splice(index, 1);
        this.setState({ todos: stateTodos });
    }

    toggleDone(index) {
        const stateTodos = [...this.state.todos];
        stateTodos[index].done = !stateTodos[index].done;
        this.setState({ todos: stateTodos });
    }

    render() {
        return (
            <Container>
                <Header>
                    <Heading />
                </Header>
                <Body>
                    <AddTodo addTodo={this.addTodo} todoMessage={this.state.defaultTodoMessage} />
                    <Todos todos={this.state.todos} removeTodo={this.removeTodo} toggleDone={this.toggleDone} /> 
                </Body>
            </Container>
        );
    }
}

export default Application;
