import { Component } from 'react';

class Statistics extends Component {
  render() {
    return (
      <ul>
        <li>Good: {this.props.good}</li>
        <li>Neutral: {this.props.neutral}</li>
        <li>Bad: {this.props.bad}</li>
        <li>Total: {this.props.total}</li>
        <li>Positive feedback: {this.props.positiveRatio}</li>
      </ul>
    );
  }
}

export { Statistics };
