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
            this.inc.addOne();
          }}
          class="button"
        >
          Increment
        </button>
        <Dec
          ref={instance => {
            this.dnc = instance;
          }}
        />
        <button
          onClick={() => {
            this.dnc.addOne();
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
