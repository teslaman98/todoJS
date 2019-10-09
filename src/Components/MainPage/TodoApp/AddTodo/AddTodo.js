import React from "react";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";

class AddTodo extends React.Component {
  constructor() {
    super();
    this.state = {
      todo: ""
    };
  }

  render() {
    return (
      <Container className="formBox" maxWidth="xs">
        <div>
          <Paper>
            <div className="addTodoContainer">
              <form onSubmit={e => this.submitTodo(e)}>
                <input
                  id="addTodoInput"
                  onChange={e => this.updateInput(e)}
                  type="text"
                />
                <button type="submit">Add Todo</button>
              </form>
            </div>
          </Paper>
        </div>
      </Container>
    );
  }

  updateInput = e => {
    this.setState({ todo: e.target.value });
  };

  submitTodo = e => {
    e.preventDefault();
    this.props.addTodoFn(this.state.todo);
  };
}

export default AddTodo;
