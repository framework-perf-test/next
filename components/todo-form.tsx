import React from "react";

import { Todo, TYPES } from "../lib/todos";

interface State {
  todo: Partial<Todo> | null;
  types: string[];
}

interface Props {
  todo: Partial<Todo> | null;
  onAddOrUpdate: Function;
}

export default class TodoForm extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      todo: props.todo,
      types: TYPES,
    };

    this.formChangeHandler = this.formChangeHandler.bind(this);
    this.updateTodoHandler = this.updateTodoHandler.bind(this);
  }

  formChangeHandler(event) {
    const target = event.target;
    const name = target.name;
    let value;
    switch (target.type) {
      case "checkbox":
        value = target.checked;
        break;

      default:
        value = target.value;
        break;
    }

    this.setState({
      todo: {
        ...this.state.todo,
        [name]: value,
      },
    });
  }

  updateTodoHandler(event: React.FormEvent) {
    event.preventDefault();
    // if (this.form.valid) {
      this.props.onAddOrUpdate(this.state.todo);
    // } else {
    //   alert("All fields are required.");
    // }
  }

  render() {
    if (this.state.todo) {
      return (
        <section>
          <h4>{this.state.todo.id ? "Update" : "Add"} Todo</h4>
          <form onSubmit={this.updateTodoHandler}>
            <table>
              <tbody>
                <tr>
                  <th>
                    <label htmlFor="name">Name</label>
                  </th>
                  <td>
                    <input
                      id="name"
                      type="text"
                      name="name"
                      value={this.state.todo.name}
                      onChange={this.formChangeHandler}
                      required
                    />
                  </td>
                  <td></td>
                </tr>
                <tr>
                  <th>
                    <label htmlFor="description">description</label>
                  </th>
                  <td>
                    <textarea
                      id="description"
                      name="description"
                      value={this.state.todo.description}
                      onChange={this.formChangeHandler}
                      required
                    ></textarea>
                  </td>
                  <td></td>
                </tr>
                <tr>
                  <th>
                    <label>Type</label>
                  </th>
                  <td>
                    <select
                      id="type"
                      name="type"
                      value={this.state.todo.type}
                      onChange={this.formChangeHandler}
                      required
                    >
                      {this.state.types.map((type: string) => (
                        <option value={type} key={type}>
                          {type}
                        </option>
                      ))}
                    </select>
                  </td>
                  <td></td>
                </tr>
                <tr>
                  <th>
                    <label>Confidential</label>
                  </th>
                  <td>
                    <label htmlFor="confidential1">Yes</label>
                    <input
                      id="confidential1"
                      type="radio"
                      name="confidential"
                      value="Yes"
                      onChange={this.formChangeHandler}
                      checked={this.state.todo.confidential === "Yes"}
                    />
                    <label htmlFor="confidential2">No</label>
                    <input
                      id="confidential2"
                      type="radio"
                      name="confidential"
                      value="No"
                      onChange={this.formChangeHandler}
                      checked={this.state.todo.confidential === "No"}
                    />
                  </td>
                  <td></td>
                </tr>
                <tr>
                  <th align="left">
                    <label>Remind</label>
                  </th>
                  <td>
                    <label htmlFor="remind">Yes</label>
                    <input
                      id="remind"
                      type="checkbox"
                      name="remind"
                      onChange={this.formChangeHandler}
                      checked={this.state.todo.remind}
                    />
                  </td>
                  <td></td>
                </tr>
                <tr>
                  <th>
                    <label htmlFor="date">Date</label>
                  </th>
                  <td>
                    <input
                      id="date"
                      type="date"
                      name="date"
                      value={this.state.todo.date}
                      onChange={this.formChangeHandler}
                      required
                    />
                  </td>
                  <td></td>
                </tr>
                <tr>
                  <th colSpan={2} align="right">
                    <button type="submit">
                      {this.state.todo.id ? "Update" : "Add"}
                    </button>
                  </th>
                </tr>
              </tbody>
            </table>
          </form>
        </section>
      );
    } else {
      return;
    }
  }
}
