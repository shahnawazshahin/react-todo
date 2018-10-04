import React, { Component } from 'react';

import '../Application.css';

class Button extends Component {
  render() {
      return (
        <button onClick={this.props.onClick} type={this.props.type}>{this.props.children}</button>
      )
  }
}

export default Button;