import React, { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      comment: "",
      topic: ""
    };
  }
  handleUserNameChanged = (event) => {
    this.setState({
      username: event.target.value
    });
  };
  handleCommnetChanged = (event) => {
    this.setState({
      comment: event.target.value
    });
  };
  handletopichanged = (event) => {
    this.setState({
      topic: event.target.value
    });
  };
  handleSubmit = (event) => {
    alert(`${this.state.username} ${this.state.comment} ${this.state.topic}`);
    event.preventDefault();
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <h2>
            UserName:
            <input
              type="text"
              value={this.state.username}
              onChange={this.handleUserNameChanged}
            />
          </h2>
        </div>
        <div>
          <h2>
            Comment:
            <textarea
              value={this.state.comment}
              onChange={this.handleCommnetChanged}
            />
          </h2>
        </div>
        <div>
          <h2>
            Topic:
            <select value={this.state.topic} onChange={this.handletopichanged}>
              <option>React</option>
              <option>Angular</option>
            </select>
          </h2>
        </div>
        <button type="submit">Submit</button>
      </form>
    );
  }
}
export default Form;
