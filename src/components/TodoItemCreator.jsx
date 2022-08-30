import React, { useState } from "react";
import { useSetRecoilState } from "recoil";
import { todoListState } from "../atoms/todoListState";

const TodoItemCreator = () => {
  // useState 사용했다.
  const [inputValue, setInputValue] = useState("");

  // 목록을 생성하기 위해서 Set이 들어가는 useSetRecoilState를 사용했다.
  // 초기값 세팅으로 todoListState를 가져온다.
  const setTodoList = useSetRecoilState(todoListState);

  // 목록을 추가하는 함수
  const addItem = (e) => {
    e.preventDefault();

    setTodoList((oldTodoList) => [
      ...oldTodoList,
      {
        id: getId(),
        text: inputValue,
        isComplete: false,
      },
    ]);
    setInputValue("");
  };

  const onChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <form>
      <input type="text" value={inputValue} onChange={onChange} />
      <button type="submit" onClick={(e) => addItem(e)}>
        Add
      </button>
    </form>
  );
};

let id = 0;
function getId() {
  return id++;
}

export default TodoItemCreator;
