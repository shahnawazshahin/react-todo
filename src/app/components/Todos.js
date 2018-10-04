import React, { Component } from 'react';

import Button from '../libs/Button';
import Checkbox from '../libs/Checkbox';
import List from '../libs/List';
import ListItem from '../libs/ListItem';
import Text from '../libs/Text';

import '../Application.css';

class Todos extends Component {
    constructor(props) {
        super(props);

        this.removeTodo = this.removeTodo.bind(this);
        this.toggleDone = this.toggleDone.bind(this);
    }

    removeTodo(index) {
        this.props.removeTodo(index);
    }

    toggleDone(index) {
        this.props.toggleDone(index);
    }

    render() {
        const items = this.props.todos.map((todo, index) =>
            <ListItem className='App-todoitem'>
                <Checkbox checked={todo.done} onChange={() => this.toggleDone(index)} />
                <Text className={todo.done ? 'App-todoitemtext App-done' : 'App-todoitemtext'}>{todo.item}</Text>
                <Button onClick={() => this.removeTodo(index)}>Remove</Button>
            </ListItem>
        );
        return (
            <List className='App-list' items={items} />
        )
    }
}

export default Todos;