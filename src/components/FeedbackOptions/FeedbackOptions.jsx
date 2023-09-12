import { Component } from 'react';
import css from './FeedbackOptions.module.css';

class FeedbackOptions extends Component {
  render() {
    return (
      <ul className={css.optionsList}>
        {this.props.options.map(option => (
          <li key={option}>
            <button onClick={() => this.props.onLeaveFeedback(option)}>
              {option}
            </button>
          </li>
        ))}
      </ul>
    );
  }
}

export { FeedbackOptions };
