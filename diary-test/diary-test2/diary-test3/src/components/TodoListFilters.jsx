import React from "react";
import { useRecoilState } from "recoil";
import { todoListFilterState } from "../atoms/todoListState";

const TodoListFilters = () => {
  const [selectValue, setSelectValue] = useRecoilState(todoListFilterState);

  const onChange = (e) => {
    setSelectValue(e.target.value);
  };

  return (
    <>
      <label>Filter: </label>
      <select onChange={onChange} value={selectValue}>
        <option value="Show All">All</option>
        <option value="Show Completed">Completed</option>
        <option value="Show Uncompleted">Uncompleted</option>
      </select>
    </>
  );
};

export default TodoListFilters;
