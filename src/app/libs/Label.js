import React, { Component } from 'react';

class Label extends Component {
    render() {
        return (
            <label className={this.props.className}>
                {this.props.children}
            </label>
        );
    }
}

export default Label;