import { Component } from "react";

import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [
        {
          name: "Kate",
          id: "125vdsd5",
        },
        {
          name: "Frank",
          id: "135sd51c",
        },
        {
          name: "Jacky",
          id: "16sc61c",
        },
        {
          name: "Artur",
          id: "35d5c11c",
        },
      ],
    };
  }

  render() {
    return (
      <div className="App">
        {this.state.monsters.map((monster) => {
          return <h1 key={monster.id}>{monster.name}</h1>;
        })}
      </div>
    );
  }
}

export default App;
