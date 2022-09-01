import React from "react";
import { useRecoilState } from "recoil";
import { todoListState } from "../atoms/todoListState";

const TodoItem = ({ item }) => {
  const [todoList, setTodoList] = useRecoilState(todoListState);
  const index = todoList.findIndex((listItem) => listItem === item);

  console.log(todoList);
  console.log(index);

  const toggleItem = () => {
    const newList = replaceItemIndexAt(todoList, index, {
      ...item,
      isCompleted: !item.isCompleted,
    });

    setTodoList(newList);
  };

  const removeItem = () => {
    const newList = removeItemIndexAt(todoList, index);
    setTodoList(newList);
  };

  const editItem = (e) => {
    const newList = replaceItemIndexAt(todoList, index, {
      ...item,
      text: e.target.value,
    });

    setTodoList(newList);
  };

  return (
    <div>
      <input type="text" value={item.text} onChange={editItem} />
      <input type="checkbox" checked={item.isCompleted} onChange={toggleItem} />
      <button type="button" onClick={() => removeItem()}>
        x
      </button>
    </div>
  );
};

export default TodoItem;

function replaceItemIndexAt(arr, index, newValue) {
  return [...arr.slice(0, index), newValue, ...arr.slice(index + 1)];
}

function removeItemIndexAt(arr, index) {
  return [...arr.slice(0, index), ...arr.slice(index + 1)];
}
