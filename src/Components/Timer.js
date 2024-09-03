import React, { Component } from 'react';

export default class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timeElapsed: 0
    };
    this.startTime = Date.now(); // Capture the start time
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState({ timeElapsed: Math.floor((Date.now() - this.startTime) / 1000) });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <p>Time since component mounted: {this.state.timeElapsed} seconds</p>
    );
  }
}
