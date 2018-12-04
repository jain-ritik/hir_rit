import React, { Component } from "react";
import ReactDOM from "react-dom";
class Display extends React.Component {
  render() {
    const string = this.props.data.join("");
    return <div className="Button"> {string} </div>;
  }
}
export default Display;
