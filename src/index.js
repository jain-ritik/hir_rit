import React from "react";
import ReactDOM from "react-dom";
import Inc from "./inc";
import Dec from "./dec";
import "./styles.css";

class Parents extends React.Component {
  /* onslick = () => {
     this.inc.current.addOne;
   };
    <inc ref={this.inc} />
    */
  fun1 = () => {
    this.inc.AddOne();
    this.dec.AddOne();
  };
  fun2 = () => {
    this.inc.SubOne();
    this.dec.SubOne();
  };
  render = () => {
    return (
      <div>
        <Inc
          ref={instance => {
            this.inc = instance;
          }}
        />
        <button
          onClick={() => {
            this.fun1();
          }}
          class="button"
        >
          Increment
        </button>
        <Dec
          ref={instance => {
            this.dec = instance;
          }}
        />
        <button
          onClick={() => {
            this.fun2();
          }}
          class="button button3"
        >
          Decrement
        </button>
      </div>
    );
  };
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Parents />, rootElement);
