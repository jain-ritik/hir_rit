import React, { Component } from "react";
import ReactDOM from "react-dom";
import Button from "./Button";
import Buttons from "./Buttons";
import Display from "./Display";
import update from "immutability-helper";
import math from "mathjs";
import "./styles.css";
import "./App.css";
var flag;
class App extends Component {
  constructor() {
    super();
    this.state = { operations: [] };
  }

  calculateOperations = () => {
    let result = this.state.operations.join("");
    if (result) {
      result = math.eval(result);
      result = math.format(result, { precision: 14 });
      result = String(result);
      this.setState({
        operations: [result]
      });
    }
  };

  handleClick = e => {
    const value = e.target.getAttribute("value");

    switch (value) {
      case "clear":
        this.setState({
          operations: []
        });
        break;
      case "equal":
        this.calculateOperations();

        break;
      case "<-":
        this.setState({
          operations: this.state.operations.splice(
            0,
            this.state.operations.length - 1
          )
        });
        break;

      default:
        if (
          value == "/" ||
          value == "^" ||
          value == "*" ||
          value == "-" ||
          value == "+" ||
          value == "."
        ) {
          flag++;
          if (flag < 2) {
            const newOperations = update(this.state.operations, {
              $push: [value]
            });
            this.setState({
              operations: newOperations
            });
          }
        } else {
          flag = 0;
          const newOperations = update(this.state.operations, {
            $push: [value]
          });
          this.setState({
            operations: newOperations
          });
        }

        break;
    }
  };
  render() {
    return (
      <div className="App">
        <Display data={this.state.operations} />

        <Buttons>
          <Button onClick={this.handleClick} label="C" value="clear" />
          <Button onClick={this.handleClick} label="(" value="(" />
          <Button onClick={this.handleClick} label="^" value="^" />
          <Button onClick={this.handleClick} label=")" value=")" />

          <br />
          <Button onClick={this.handleClick} label="log" value="log" />

          <Button onClick={this.handleClick} label="/" value="/" />
          <Button onClick={this.handleClick} label="." value="." />
          <Button onClick={this.handleClick} label="*" value="*" />
          <br />
          <Button onClick={this.handleClick} label="<-" value="<-" />

          <Button onClick={this.handleClick} label="-" value="-" />

          <Button onClick={this.handleClick} label="+" size="2" value="+" />
          <Button onClick={this.handleClick} label="=" size="2" value="equal" />
          <br />
          <Button onClick={this.handleClick} label="sin" value="sin" />
          <Button onClick={this.handleClick} label="cos" value="cos" />
          <Button onClick={this.handleClick} label="1" value="1" />
          <Button onClick={this.handleClick} label="2" value="2" />
          <br />
          <Button onClick={this.handleClick} label="3" value="3" />
          <Button onClick={this.handleClick} label="4" value="4" />
          <Button onClick={this.handleClick} label="5" value="5" />
          <Button onClick={this.handleClick} label="6" value="6" />
          <br />
          <Button onClick={this.handleClick} label="7" value="7" />
          <Button onClick={this.handleClick} label="8" value="8" />
          <Button onClick={this.handleClick} label="9" value="9" />
          <Button onClick={this.handleClick} label="0" value="0" />

          <br />
        </Buttons>
      </div>
    );
  }
}
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
