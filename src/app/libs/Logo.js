import React, { Component } from 'react';

import logo from '../logo.svg';
import '../Application.css';

class Logo extends Component {
    render() {
        return (
          <img src={logo} className="App-logo" alt="{this.props.alt}" />
        )
    }
}

export default Logo;