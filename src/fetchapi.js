import React from "react";
import "./styles.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    };
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(json => {
        this.setState({
          items: json
        });
      });
  }
  render() {
    var { items } = this.state;
    return (
      <div classname="App">
        <ul>
          {items.map(item => (
            <li key="{item.id}">
              Name: {item.name} & Email: {item.email}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
export default App;
