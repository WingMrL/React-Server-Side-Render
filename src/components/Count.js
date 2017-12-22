import React, { Component } from 'react';
import { connect } from 'react-redux'

class Count extends Component {
  render() {
    const { count } = this.props;
    return (
      <h2>Index: { count }</h2>
    );
  }
}

function mapStateToProps(state) {
  return {
    count: state.count.index
  };
}

function mapDispatchToProps(dispatch) {
  return {
    dispatch: dispatch
  }
}

export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(Count);