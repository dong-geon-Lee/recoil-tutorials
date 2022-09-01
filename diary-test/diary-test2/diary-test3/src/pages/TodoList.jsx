import React from "react";
import { useRecoilState } from "recoil";
import { filteredTodoListState } from "../atoms/todoListState";
import TodoItem from "../components/TodoItem";

const TodoList = () => {
  const [todoList, _] = useRecoilState(filteredTodoListState);

  console.log(todoList);

  return (
    <>
      {todoList.map((todoItem) => (
        <TodoItem key={todoItem.id} item={todoItem} />
      ))}
    </>
  );
};

export default TodoList;
