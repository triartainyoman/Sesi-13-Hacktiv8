import React from "react";

export default class Users extends React.Component {
  constructor() {
    super();
    this.state = {
      username: "user01",
    };
  }

  getUsername() {
    return this.state.username;
  }

  // Membaca state di dalam render
  // render() {
  //   return <h1>{this.state.username}</h1>;
  // }

  render() {
    return <h1>{this.getUsername()}</h1>;
  }
}
