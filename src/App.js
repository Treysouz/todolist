import React, { Component } from "react";

export default class TodoList extends Component {
  constructor() {
    super();
    this.state = {
      todo: [],
      currentTodo: ""
    };
  }
  handleChange = event => {
    this.setState({
      currentTodo: event.target.value
    });
  };

  addItem = event => {
    event.preventDefault();
    this.setState({
      todo: this.state.todo.concat(this.state.currentTodo)
    });
  };

  deleteItem = event => {
    event.target.parentNode.remove();
  };

  componentDidUpdate() {
    console.log(this.state.todo);
  }
  render() {
    return (
      <main className="container">
        <form onSubmit={this.addItem}>
          <label htmlFor="taskname">Task Name:</label>
          <input
            type="text"
            name="taskName"
            placeholder="Add task here!"
            onChange={this.handleChange}
          ></input>
          <button type="submit">Add Task</button>
        </form>

        <ul>
          {this.state.todo.map(task => (
            <li key={task}>
              {task}{" "}
              <button type="submit" onClick={this.deleteItem}>
                Delete
              </button>
            </li>
          ))}
        </ul>
      </main>
    );
  }
}
