import React, { Component } from 'react';

import '../Application.css';

class Container extends Component {
    render() {
        return (
          <div className="App">
            {this.props.children}
          </div>
        )
    }
}

export default Container;