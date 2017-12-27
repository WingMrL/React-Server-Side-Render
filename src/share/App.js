import React, { Component } from 'react';
import Count from '../components/Count';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as CountActions from '../actions/count';

class App extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const { actions } = this.props;
    actions.indexAddOne();
  }

  render() {
    return (
      <div>
        { this.props.children || <div /> }
        <Count />
        <button onClick={ this.handleClick }>Click me</button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {

  }
}

function mapDispatchToProps(dispatch) {
  return {
    dispatch: dispatch,
    actions: {
      ...bindActionCreators(CountActions, dispatch)
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);