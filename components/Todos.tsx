import React from "react";

import {
  Todo,
  getTodos,
  getTodo,
  addTodo,
  updateTodo,
  deleteTodo,
} from "./todos";
import TodoForm from "./TodoForm";

interface State {
  currentTodo: Partial<Todo> | null;
  todos: Todo[];
}

interface Props {}

export default class Todos extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      currentTodo: null,
      todos: getTodos(),
    };

    this.addTodoHandler = this.addTodoHandler.bind(this);
    this.selectTodoHandler = this.selectTodoHandler.bind(this);
    this.onUpdateTodoHandler = this.onUpdateTodoHandler.bind(this);
  }

  addTodoHandler() {
    this.setState({
      currentTodo: {
        name: "",
        description: "",
        type: "",
        confidential: "No",
        remind: false,
        date: "",
      },
    });
  }

  selectTodoHandler(id: number) {
    this.setState({ currentTodo: getTodo(id) });
  }

  onUpdateTodoHandler(todo: Partial<Todo>) {
    if (!todo.id) {
      addTodo(todo);
    } else {
      updateTodo(todo as Todo);
    }
    this.setState({ currentTodo: null, todos: getTodos() });
  }

  deleteTodoHandler(id: number) {
    deleteTodo(id);
    this.setState({ todos: getTodos() });
  }

  render() {
    return (
      <>
        <h3>
          Todos <button onClick={this.addTodoHandler}>New</button>
        </h3>
        {this.state.currentTodo && (
          <TodoForm
            todo={this.state.currentTodo}
            onAddOrUpdate={this.onUpdateTodoHandler}
          />
        )}
        <br />
        <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>description</th>
              <th>Type</th>
              <th>Confidential</th>
              <th>Remind</th>
              <th>Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {this.state.todos.map((todo) => (
              <tr key={todo.id}>
                <td>{todo.id}</td>
                <td>{todo.name}</td>
                <td>{todo.description}</td>
                <td>{todo.type}</td>
                <td>{todo.confidential}</td>
                <td>{todo.remind.toString()}</td>
                <td>{todo.date}</td>
                <td>
                  <button
                    type="button"
                    onClick={() => this.selectTodoHandler(todo.id)}
                  >
                    Edit
                  </button>
                  <button
                    type="button"
                    onClick={() => this.deleteTodoHandler(todo.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </>
    );
  }
}
