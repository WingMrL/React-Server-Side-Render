import React, { Component } from 'react';
import { Link } from 'react-router';

class Hello extends Component {
  render() {
    return (
      <div>
        <h1> Hello, React Server-Side-Render.</h1>
        <Link to='/about'>./about</Link>
      </div>
    );
  }
}

export default Hello;