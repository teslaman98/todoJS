import React from "react";
import TodoItem from "../TodoItem/TodoItem";

class TodoList extends React.Component {
  render() {
    const { todos } = this.props;

    return (
      <div className="todoListContainer">
        {todos.map((_todo, index) => {
          return (
            <TodoItem
                updateTodoFn={this.props.updateTodoFn}
                deleteTodoFn={this.props.deleteTodoFn}
                todo={_todo}
                key={index}>
              {" "}
            </TodoItem>
          );
        })}
      </div>
    );
  }

 /* updateTodo = todo => {
    this.props.updateTodoFn(todo);
  };*/
}
export default TodoList;
