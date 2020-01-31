import React from "react";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import './style.css';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

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
          <Paper className="paperContainer">
            <div className="addTodoContainer">
              <form onSubmit={e => this.submitTodo(e)}>
                <input
                  id="addTodoInput"
                  onChange={e => this.updateInput(e)}
                  type="text"
                />
                <Fab color="primary" aria-label="add" type="submit">
                  <AddIcon />
                </Fab>
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
