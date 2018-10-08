import React, { Component } from 'react';

class Textbox extends Component {
    render() {
        return (
            <input
                type='text'
                placeholder={this.props.placeholder}
                value={this.props.value}
                onChange={this.props.onChange} />
        );
    }
}

export default Textbox;