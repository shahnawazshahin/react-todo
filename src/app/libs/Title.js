import React, { Component } from 'react';

import '../Application.css';

class Title extends Component {
  render() {
      return (
        <h1 className="App-title">{this.props.name}</h1>
      )
  }
}

export default Title;