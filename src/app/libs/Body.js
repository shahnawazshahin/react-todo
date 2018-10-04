import React, { Component } from 'react';

import '../Application.css';

class Body extends Component {
    render() {
        return (
          <div className="App-body">
            {this.props.children}
          </div>
        )
    }
}

export default Body;