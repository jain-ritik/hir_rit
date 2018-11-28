import React from "react";
import ReactDOM from "react-dom";
import Inc from "./inc";
import Dec from "./dec";
import App from "./fetchapi.js";
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
        <App />
      </div>
    );
  };
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Parents />, rootElement);
