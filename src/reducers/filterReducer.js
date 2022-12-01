const filterReducer = (state, action) => {
  switch (action.type) {
    case "LOAD_FILTER_PRODUCTS":
      return {
        ...state,
        filtered_product: [...action.payload],
        all_product: [...action.payload],
      };
    case "GRID_VIEW":
      return {
        ...state,
        grid_view: action.payload,
      };
    case "GET_SORT_VALUE":
      let userSortValue = document.getElementById("sort");
      let value = userSortValue.options[userSortValue.selectedIndex].value;
      return {
        ...state,
        sorting_value: value,
      };
    case "SORT_DATA":
      let newSortData;
      let tempSortData = [...action.payload];
      if (state.sorting_value === "a-z") {
        newSortData = tempSortData.sort((a, b) => {
          return a.name.localeCompare(b.name);
        });
      } else if (state.sorting_value === "z-a") {
        newSortData = tempSortData.sort((a, b) => {
          return b.name.localeCompare(a.name);
        });
      } else if (state.sorting_value === "highest") {
        newSortData = tempSortData.sort((a, b) => {
          return b.price - a.price;
        });
      } else if (state.sorting_value === "lowest") {
        newSortData = tempSortData.sort((a, b) => {
          return a.price - b.price;
        });
      }
      return {
        ...state,
        filtered_product: newSortData,
      };
    default:
      return state;
  }
};

export default filterReducer;
