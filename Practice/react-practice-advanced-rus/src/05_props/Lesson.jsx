import React, { Component } from "react";
import PropTypes from "prop-types";

export const Counter = ({ counter = 0 }) => {
  return <h1>{`Counter component. Counter value is: ${counter}`}</h1>;
};

export const Button = () => <button>Simple Button</button>;

export class Lesson extends Component {
  static propTypes = {
    children: PropTypes.element
  };

  static defaultProps = {
    children: null
  };

  state = {
    counter: 0
  };

  handleClick = () => {
    this.setState(({ counter }) => ({
      counter: counter + 1
    }));
  };

  render() {
    const { counter } = this.state;
    const { children, child } = this.props;

    return (
      <div>
        {child}
        <div>{counter}</div>
        {children}
        <button onClick={this.handleClick}>+1</button>
      </div>
    );
  }
}
