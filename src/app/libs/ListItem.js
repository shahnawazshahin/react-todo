import React, { Component } from 'react';

import '../Application.css';

class ListItem extends Component {
    render() {
        return (
          <li className={this.props.className}>
            {this.props.children}
          </li>
        )
    }
}

export default ListItem;