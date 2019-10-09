import React from "react";
import ReactDOM from "react-dom";
import PersistentDrawerLeft from "./PersistentDrawerLeft/PersistentDrawerLeft";
import TodoApp from "./TodoApp/TodoApp";

function MainPage() {
  return (
    <div className="mainPage">
      <PersistentDrawerLeft />
      <TodoApp />
    </div>
  );
}

export default MainPage;
