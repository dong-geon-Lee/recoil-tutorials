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

      {todoList.map((todoItem) => (
        <TodoItem key={todoItem.id} item={todoItem} />
      ))}
    </>
  );
};

export default TodoList;

// 1. 기본적인 pages와 components 생성.
// 2. atom으로 상태의 기본값을 정의하여 전역으로 공유.
// 3. map으로 렌더링 하는데 필요한 최소한의 준비.
// 4. 렌더링 하기 위해서 todoItemCreator 컴포넌트 만들기
// 5. todoItem 컴포넌트 만들기
// 6. deleteItem 함수 만들기
// 7. toggleItemCompletion 함수 만들기
// 8. editItemText 함수 만들기
