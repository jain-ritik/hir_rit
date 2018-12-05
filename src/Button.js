import React, { Component } from "react";
import ReactDOM from "react-dom";

class Button extends React.Component {
  render() {
    return (
      <div
        onClick={this.props.onClick}
        className="button3"
        size={this.props.size}
        value={this.props.value}
      >
        {this.props.label}
      </div>
    );
  }
}
export default Button;
