import React, { Component } from "react";
import { connect } from "react-redux";

import { inscCount, descCount } from "../actions/counter";

class Counter extends Component {
  constructor(props) {
    super(props);
  }

  onInscrement = () => {
    this.props.inscCount();
  };

  onDecrement = () => {
    console.log("Giam...");

    this.props.descCount();
  };

  render() {
    return (
      <p>
        Count: {this.props.count}
        <button onClick={() => this.onInscrement()}>+</button>
        <button onClick={() => this.onDecrement()}>-</button>
      </p>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  inscCount: () => {
    dispatch(inscCount());
  },

  descCount: () => {
    dispatch(descCount());
  }
});

const mapStateToProps = state => ({
  count: state.counter.count
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);
