import React, { Component } from "react";
import "./App.css"

export default class App extends Component {
  state = {
    users: [],
  };
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((data) => data.json())
      .then((users) => {
        this.setState({ users: users });
      });
  }

  render() {
    return (
      <div className="App">
        <h1>Users</h1>
        {this.state.users.map((user) => (
          <div key={user.id}>{user.name}</div>
        ))}
      </div>
    );
  }
}
