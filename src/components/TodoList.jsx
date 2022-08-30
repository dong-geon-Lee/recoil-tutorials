import React from "react";
import { useRecoilState } from "recoil";
import { filteredTodoListState } from "../atoms/todoListState";
import TodoItem from "./TodoItem";
import TodoItemCreator from "./TodoItemCreator";
import TodoListFilters from "./TodoListFilters";
import TodoListStats from "./TodoListStats";

const TodoList = () => {
  // filteredTodoListState는 2개의 상태를 소유하고 있다.
  // 각각 todoListState(목록), todoListFilterState(옵션)
  // useRecoilState는 useState와 유사하다.
  const [todoList, _] = useRecoilState(filteredTodoListState);

  console.log(todoList);

  return (
    <>
      {/* 3. 변경 된 목록의 상태를 조회한다 */}
      <TodoListStats />

      {/* 2. 옵션을 선택해서 목록을 필터링 한다 */}
      <TodoListFilters />

      {/* 1. 목록을 생생한다 */}
      <TodoItemCreator />

      {/* 목록을 렌더링 해준다 */}
      {todoList.map((todoItem) => (
        <TodoItem key={todoItem.id} item={todoItem} />
      ))}
    </>
  );
};

export default TodoList;
