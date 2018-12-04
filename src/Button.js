import React, { Component } from "react";
import ReactDOM from "react-dom";
class Button extends React.Component {
  render() {
    return (
      <div
        onClick={this.props.onClick}
        className="Button button3"
        data-size={this.props.size}
        data-value={this.props.value}
      >
        {this.props.label}
      </div>
    );
  }
}
export default Button;
