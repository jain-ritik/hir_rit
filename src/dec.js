import React from "react";
import Inc from "./inc";
class Dec extends React.Component {
  constructor(props) {
    super(props);

    //this.inc = React.createRef();
    this.state = {
      counter: 0,
      flag: 0
    };
  }
  SubOne = () => {
    this.setState({
      counter: this.state.counter - 1,
      flag: (this.state.flag = 1)
    });
  };
  AddOne = () => {
    this.setState({
      counter: this.state.counter + 1,
      flag: (this.state.flag = 0)
    });
  };

  render = () => {
    if (this.state.flag == 0) return <p />;
    else {
      return (
        <div>
          <h1> {this.state.counter}</h1>
        </div>
      );
    }
  };
}
export default Dec;
