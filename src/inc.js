import React from "react";
import Dec from "./dec";
class Inc extends React.Component {
  constructor(props) {
    super(props);

    //this.inc = React.createRef();
    this.state = {
      counter: 0,
      flag: 0
    };
  }
  AddOne = () => {
    this.setState({
      counter: this.state.counter + 1,
      flag: (this.state.flag = 1)
    });
  };
  SubOne = () => {
    this.setState({
      counter: this.state.counter - 1,
      flag: (this.state.flag = 0)
    });
  };

  render = () => {
    if (this.state.flag == 1)
      return (
        <div>
          <h1> {this.state.counter}</h1>
        </div>
      );
    else {
      return <p />;
    }
  };
}
export default Inc;
