import { Component } from "react";

import logo from "./logo.svg";
import "./App.css";

// class App extends Component {
//   constructor() {
//     super();

//     this.state = {
//       monsters: [],
//     };
//   }

//   componentDidMount() {
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then((response) => response.json())
//       .then((users) =>
//         this.setState(
//           () => {
//             return { monsters: users };
//           },
//           () => {
//             console.log(this.state);
//           }
//         )
//       );
//   }

//   render() {
//     return (
//       <div className="App">
//         {this.state.monsters.map((monster) => {
//           return <h1 key={monster.id}>{monster.name}</h1>;
//         })}
//       </div>
//     );
//   }
// }

const App = () => {
  return <h1>Hello JSX!</h1>;
  const List = (props) => {
    {
      /* Change code below this line */
    }
    return <p>{}</p>;
    {
      /* Change code above this line */
    }
  };

  class ToDo extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return (
        <div>
          <h1>To Do Lists</h1>
          <h2>Today</h2>
          {/* Change code below this line */}
          <List />
          <h2>Tomorrow</h2>
          <List />
          {/* Change code above this line */}
        </div>
      );
    }
  }
};

export default App;
