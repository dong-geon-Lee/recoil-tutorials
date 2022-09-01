import React, { useState } from "react";
import { useSetRecoilState } from "recoil";
import { todoListState } from "../atoms/todoListState";

const TodoItemCreator = () => {
  const [inputValue, setInputValue] = useState("");
  const setTodoList = useSetRecoilState(todoListState);

  const addItem = (e) => {
    e.preventDefault();

    setTodoList((oldItemList) => {
      return [
        ...oldItemList,
        { id: getId(), text: inputValue, isCompleted: false },
      ];
    });

    setInputValue("");
  };

  const onChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <form onSubmit={addItem}>
      <input type="text" value={inputValue} onChange={onChange} />
      <button type="submit">Add</button>
    </form>
  );
};

export default TodoItemCreator;

let id = 0;
function getId() {
  return ++id;
}
