import React from "react";
import TodoItemCreator from "./components/TodoItemCreator";
import TodoListFilters from "./components/TodoListFilters";
import TodoListStatus from "./components/TodoListStatus";
import TodoList from "./pages/TodoList";

const App = () => {
  return (
    <>
      <TodoListStatus />
      <TodoListFilters />
      <TodoItemCreator />
      <TodoList />
    </>
  );
};

export default App;
