import { Component } from 'react';
import css from './Section.module.css';

class Section extends Component {
  render() {
    return (
      <div className={css.section}>
        <h2>{this.props.title}</h2>
        {this.props.children}
      </div>
    );
  }
}

export { Section };
