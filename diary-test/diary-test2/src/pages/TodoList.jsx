import React from "react";
import { useRecoilState } from "recoil";
import { filteredTodoListState } from "../atoms/todoListState";
import TodoItem from "../components/TodoItem";
import TodoItemCreator from "../components/TodoItemCreator";
import TodoListFilters from "../components/TodoListFilters";
import TodoListStatus from "../components/TodoListStatus";

const TodoList = () => {
  const [todoList, _] = useRecoilState(filteredTodoListState);
  console.log(todoList);

  return (
    <>
      <TodoListStatus />
      <TodoListFilters />
      <TodoItemCreator />

      {todoList.map((item) => (
        <TodoItem key={item.id} item={item} />
      ))}
    </>
  );
};

export default TodoList;
