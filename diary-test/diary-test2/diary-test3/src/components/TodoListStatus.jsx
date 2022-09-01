import React from "react";
import { useRecoilValue } from "recoil";
import { todoListStatusState } from "../atoms/todoListState";

const TodoListStatus = () => {
  const { totalItem, completedItem, unCompletedItem, completedPercent } =
    useRecoilValue(todoListStatusState);

  const formattedPercent = Math.round(completedPercent * 100);
  return (
    <ul>
      <li>Total items: {totalItem}개</li>
      <li>Items completed: {completedItem}개 </li>
      <li>Items not completed: {unCompletedItem}개 </li>
      <li>Percent completed: {formattedPercent}% </li>
    </ul>
  );
};

export default TodoListStatus;
