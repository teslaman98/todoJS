import React from 'react';
import './style.css';
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";


class TodoItem extends React.Component {

    render() {

        const { todo } = this.props;


        return(
        <Container className="itemBox" maxWidth="sm">
            <div>
                <Paper>
                    <div className={'todoItem' + (todo.completed ? ' completed' : '')} onClick={this.toggleTodo}>{ todo.text }</div>
                </Paper>
            </div>
        </Container>);
    }

    toggleTodo = () => {
        this.props.updateTodoFn(this.props.todo);
    }

}

export default TodoItem;