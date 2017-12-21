import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      index: 0
    };
  }

  handleClick() {
    this.setState((prevState) => {
      return {
        index: prevState.index + 1
      }
    });
  }

  render() {
    const { index } = this.state;
    return (
      <div>
        <h1> Hello, React Server-Side-Render.</h1>
        <h2> Index: { index } </h2>
        <button onClick={ this.handleClick }>Click me</button>
      </div>
    );
  }
}

export default App;