import React from "react";
import { useRecoilValue } from "recoil";
import { todoListStatusState } from "../atoms/todoListState";

const TodoListStatus = () => {
  const { totalNum, totalCompletedNum, totalUncompletedNum, percentCompleted } =
    useRecoilValue(todoListStatusState);

  const formattedPercentCompleted = Math.round(percentCompleted * 100);

  return (
    <ul>
      <li>Total items: {totalNum}개</li>
      <li>Items completed: {totalCompletedNum}개</li>
      <li>Items not completed: {totalUncompletedNum}개</li>
      <li>Percent completed: {formattedPercentCompleted}%</li>
    </ul>
  );
};

export default TodoListStatus;
