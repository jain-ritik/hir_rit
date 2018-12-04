import React, { Component } from "react";
import ReactDOM from "react-dom";
class Buttons extends React.Component {
  render() {
    return <div className="Buttons"> {this.props.children} </div>;
  }
}
export default Buttons;
