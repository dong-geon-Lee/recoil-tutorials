import React from "react";
import { useRecoilState } from "recoil";
import { todoListState } from "../atoms/todoListState";

const TodoItem = ({ item }) => {
  const [todoList, setTodoList] = useRecoilState(todoListState);

  //! 왜 상태를 공유하는 todoListState가 2개가 쓰인거지?
  // 첫 번쨰는 비교하여 렌더링 하기위해서 1개가 쓰였다.
  // 두 번쨰는 '상태'를 업데이트 하기위해서 쓰였다.
  console.log(todoList, "원본");

  // findIndex는 listItem 목록 개수만큼 콜백 함수를 호출한다.
  const index = todoList.findIndex((listItem) => {
    return listItem === item;
  });

  console.log(index);

  const toggleItemCompletion = () => {
    const newList = replaceItemAtIndex(todoList, index, {
      ...item,
      isComplete: !item.isComplete,
    });

    setTodoList(newList);
  };

  const deleteItem = () => {
    const newList = removeItemAtIndex(todoList, index);

    setTodoList(newList);
  };

  const editItemText = (e) => {
    const newList = replaceItemAtIndex(todoList, index, {
      ...item,
      isComplete: !item.isComplete,
    });

    setTodoList(newList);
  };

  return (
    <div>
      <input type="text" value={item.text} onChange={editItemText} />
      <input
        type="checkbox"
        checked={item.isComplete}
        onChange={toggleItemCompletion}
      />

      <button onClick={() => deleteItem()}>X</button>
    </div>
  );
};

export default TodoItem;

function removeItemAtIndex(arr, index) {
  return [...arr.slice(0, index), ...arr.slice(index + 1)];
}

function replaceItemAtIndex(arr, index, newValue) {
  return [...arr.slice(0, index), newValue, ...arr.slice(index + 1)];
}
