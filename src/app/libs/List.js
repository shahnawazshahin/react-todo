import React, { Component } from 'react';

class List extends Component {
    render() {
        return (
          <ul className={this.props.className}>
            {this.props.items}
          </ul>
        )
    }
}

export default List;