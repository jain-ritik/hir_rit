import React from "react";
import ReactDOM from "react-dom";
import Inc from "./inc";
import Dec from "./dec";
import List from "./list";
import "./styles.css";

class Parents extends React.Component {
  render = () => {
    return (
      <div>
        <List />
      </div>
    );
  };
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Parents />, rootElement);
