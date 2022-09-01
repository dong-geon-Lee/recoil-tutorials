import { atom, selector } from "recoil";

export const todoListState = atom({
  key: "todoListState",
  default: [],
});

export const todoListFilterState = atom({
  key: "todoListFilterState",
  default: "Show All",
});

export const filteredTodoListState = selector({
  key: "filteredTodoListState",
  get: ({ get }) => {
    const list = get(todoListState);
    const filter = get(todoListFilterState);

    switch (filter) {
      case "Show Completed":
        return list.filter((item) => item.isComplete);
      case "Show Uncompleted":
        return list.filter((item) => !item.isComplete);

      default:
        return list;
    }
  },
});

export const todoListStatusState = selector({
  key: "todoListStatusState",
  get: ({ get }) => {
    const list = get(todoListState);
    const totalItem = list.length;
    const completedItem = list.filter((item) => item.isComplete).length;
    const unCompletedItem = totalItem - completedItem;
    const completedPercent = totalItem === 0 ? 0 : completedItem / totalItem;

    return { totalItem, completedItem, unCompletedItem, completedPercent };
  },
});
