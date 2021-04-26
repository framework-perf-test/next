import React from "react";
import { Formik } from "formik";
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
  }

  render() {
    if (this.state.todo) {
      return (
        <section>
          <h4>{this.state.todo.id ? "Update" : "Add"} Todo</h4>
          <Formik
            initialValues={{ ...this.state.todo }}
            validate={(values) => {
              const errors: any = {};
              if (!values.name) {
                errors.name = "Name is Required";
              }
              if (!values.description) {
                errors.description = "Description is Required";
              }
              if (!values.type) {
                errors.type = "Type is Required";
              }
              if (!values.date) {
                errors.date = "Date is Required";
              }
              return errors;
            }}
            onSubmit={(values) => {
              this.setState({ todo: values });
              this.props.onAddOrUpdate(this.state.todo);
            }}
          >
            {({ values, errors, touched, handleChange, handleSubmit }) => (
              <form onSubmit={handleSubmit}>
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
                          onChange={handleChange}
                          value={values.name}
                          required
                        />
                      </td>
                      <td>{errors.name}</td>
                    </tr>
                    <tr>
                      <th>
                        <label htmlFor="description">description</label>
                      </th>
                      <td>
                        <textarea
                          id="description"
                          name="description"
                          onChange={handleChange}
                          value={values.description}
                          required
                        ></textarea>
                      </td>
                      <td>
                        {errors.description}
                      </td>
                    </tr>
                    <tr>
                      <th>
                        <label>Type</label>
                      </th>
                      <td>
                        <select
                          id="type"
                          name="type"
                          onChange={handleChange}
                          value={values.type}
                          required
                        >
                          {this.state.types.map((type: string) => (
                            <option value={type} key={type}>
                              {type}
                            </option>
                          ))}
                        </select>
                      </td>
                      <td>{errors.type}</td>
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
                          onChange={handleChange}
                          checked={values.confidential === "Yes"}
                        />
                        <label htmlFor="confidential2">No</label>
                        <input
                          id="confidential2"
                          type="radio"
                          name="confidential"
                          value="No"
                          onChange={handleChange}
                          checked={values.confidential === "No"}
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
                          onChange={handleChange}
                          checked={values.remind}
                        />
                      </td>
                      <td>{errors.remind}</td>
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
                          onChange={handleChange}
                          value={values.date}
                          required
                        />
                      </td>
                      <td>{errors.date}</td>
                    </tr>
                    <tr>
                      <th colSpan={2} align="right">
                        <button type="submit">
                          {values.id ? "Update" : "Add"}
                        </button>
                      </th>
                    </tr>
                  </tbody>
                </table>
              </form>
            )}
          </Formik>
        </section>
      );
    } else {
      return;
    }
  }
}
