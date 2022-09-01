import React from "react";
import { useState } from "react";
import { useRecoilState } from "recoil";
import { todoListState } from "../atoms/todoListState";

const TodoItem = ({ item }) => {
  const [todoList, setTodoList] = useRecoilState(todoListState);
  const [editState, setEditState] = useState(false);
  const [textValue, setTextValue] = useState("");

  const index = todoList.findIndex((listItem) => listItem === item);

  const removeTodoItem = () => {
    const newList = removeItemIndexAt(todoList, index);
    setTodoList(newList);
  };

  const toggleTodoItem = () => {
    const newList = replaceItemIndexAt(todoList, index, {
      ...item,
      isComplete: !item.isComplete,
    });

    setTodoList(newList);
  };

  const editItemState = () => {
    setEditState((prevState) => !prevState);
  };

  const updateTodoItem = (e) => {
    e.preventDefault();

    const newList = replaceItemIndexAt(todoList, index, {
      ...item,
      text: textValue,
    });

    setTodoList(newList);
    editItemState();
  };

  const onChange = (e) => {
    setTextValue(e.target.value);
  };

  console.log(item);
  return (
    <div>
      {editState ? (
        <form onSubmit={updateTodoItem}>
          <input
            type="text"
            value={textValue}
            onChange={onChange}
            placeholder="텍스트를 입력 해주세요"
          />
          <button type="submit">완료</button>
        </form>
      ) : (
        <label>{item.text}</label>
      )}
      <button onClick={editItemState}>edit</button>

      <input
        type="checkbox"
        checked={item.isComplete}
        onChange={toggleTodoItem}
      />
      <button type="button" onClick={removeTodoItem}>
        x
      </button>
    </div>
  );
};

export default TodoItem;

function removeItemIndexAt(arr, index) {
  return [...arr.slice(0, index), ...arr.slice(index + 1)];
}

function replaceItemIndexAt(arr, index, newItem) {
  return [...arr.slice(0, index), newItem, ...arr.slice(index + 1)];
}
