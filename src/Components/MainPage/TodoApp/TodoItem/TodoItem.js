import React from 'react';
import './style.css';
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';



class TodoItem extends React.Component {

    render() {

        const { todo } = this.props;


        return(
        <Container className="itemBox" maxWidth="sm">
            <div>
                <Paper className="paperItem">
                    <div>
                        <div className={'todoItem' + (todo.completed ? ' completed' : '')}
                             onClick={this.toggleTodo}>{ todo.text }</div>
                        <IconButton aria-label="delete" onClick={this.doneTodo}>
                            <DeleteIcon fontSize="small" />
                        </IconButton>
                    </div>

                </Paper>
            </div>
        </Container>);
    }

    toggleTodo = () => {
        this.props.updateTodoFn(this.props.todo);
    }
    doneTodo = () => {
        this.props.deleteTodoFn(this.props.todo);
    }


}

export default TodoItem;
