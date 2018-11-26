import React from "react";
class Dec extends React.Component {
  constructor(props) {
    super(props);

    //this.inc = React.createRef();
    this.state = {
      counter: 0
    };
  }
  addOne = () => {
    this.setState({
      counter: this.state.counter - 1
    });
  };

  render = () => {
    return (
      <div>
        <h1> {this.state.counter}</h1>
      </div>
    );
  };
}
export default Dec;
