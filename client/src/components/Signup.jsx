import React, { Component } from "react";
import axios from "axios";

export default class Signup extends Component {
  state = {
    email: "",
    password: "",
    message: ""
  };


  // ask --- [this.target.name]

  handleChange = event => {
    this.setState({
      [this.target.name]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();

    axios
      .post("/api/auth/signup", {
        email: this.state.username,
        password: this.state.password
      })
      .then(response => {
        // redirect
        this.props.history.push("/");
        // update state for user in <App />
        // this.props.setUser(response.data);
      })
      .catch(err => {
        this.setState({
          message: err.response.data.message
        });
      });
  };

  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="email">Email: </label>
          <input
            type="email"
            id="email"
            name="email"
            value={this.state.email}
            onChange={this.handleChange}
          />

          <label htmlFor="password">Password: </label>
          <input
            tpye="password"
            name="password"
            id="password"
            value={this.state.password}
            onChange={this.handleChange}
          />
          <button type="submit">Sign up</button>
        </form>
        {this.state.message && <p>{this.state.message}</p>}
      </>
    );
  }
}
