import React from "react";
import TodoList from "./TodoList/TodoList.js";
import AddTodo from "./AddTodo/AddTodo";

class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: []
    };
  }

  render() {
    return (
      <div>
        <AddTodo addTodoFn={this.addTodo} />
        <TodoList updateTodoFn={this.updateTodo} todos={this.state.todos} />
      </div>
    );
  }
  componentDidMount = () => {
    const todos = localStorage.getItem("todos");
    if (todos) {
      const savedTodos = JSON.parse(todos);
      this.setState({ todos: savedTodos });
    } else {
      console.log("No todos");
    }
  };

  addTodo = todo => {
    const newState = [
      ...this.state.todos,
      {
        text: todo,
        completed: false
      }
    ];

    this.setState({
      todos: newState
    });
    localStorage.setItem("todos", JSON.stringify(newState));
    console.log(localStorage.getItem("todos"));
  };

  updateTodo = async todo => {
    const newTodos = this.state.todos.map(_todo => {
      if (todo === _todo)
        return {
          text: todo.text,
          completed: !todo.completed
        };
      else return _todo;
    });
    await this.setState({ todos: newTodos });
    localStorage.setItem("todos", JSON.stringify(newTodos));
  };
}

export default TodoApp;
