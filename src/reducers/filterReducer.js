const filterReducer = (state, action) => {
  switch (action.type) {
    case "LOAD_FILTER_PRODUCTS":
      let maxPrice = action.payload.map((item) => item.price);
      // maxPrice = Math.max.apply(null, maxPrice); //method 1
      // maxPrice = maxPrice.reduce(
      //   (initialVal, item) => Math.max(initialVal, item),
      //   0
      // ); //method 2
      maxPrice = Math.max(...maxPrice); //method 3
      return {
        ...state,
        filtered_product: [...action.payload],
        all_product: [...action.payload],
        filters: {
          ...state.filters,
          price: maxPrice,
          maxPrice: maxPrice,
        },
      };
    case "GRID_VIEW":
      return {
        ...state,
        grid_view: action.payload,
      };
    case "GET_SORT_VALUE":
      let userSortValue = document.getElementById("sort");
      let sort_value = userSortValue.options[userSortValue.selectedIndex].value;
      return {
        ...state,
        sorting_value: sort_value,
      };
    case "SORT_DATA":
      let newSortData;
      const { filtered_product, sorting_value } = state;
      let tempSortData = [...filtered_product];
      const sortProduct = (a, b) => {
        switch (sorting_value) {
          case "a-z":
            return a.name.localeCompare(b.name);
          case "z-a":
            return b.name.localeCompare(a.name);
          case "highest":
            return b.price - a.price;
          case "lowest":
            return a.price - b.price;
          default:
            return tempSortData;
        }
      };
      newSortData = tempSortData.sort(sortProduct);
      return {
        ...state,
        filtered_product: newSortData,
      };
    case "UPDATE_FILTER_VALUE":
      const { name, value } = action.payload;
      return {
        ...state,
        filters: {
          ...state.filters,
          [name]: value,
        },
      };
    case "FILTER_DATA":
      let { all_product } = state;
      let tempData = [...all_product];
      const { text, category, color, company, price } = state.filters;
      if (text) {
        tempData = tempData.filter((item) => {
          return item.name.toLowerCase().includes(text);
        });
      }
      if (category && category !== "All") {
        tempData = tempData.filter((item) => {
          return item.category == category;
        });
      }
      if (company && company !== "All") {
        tempData = tempData.filter((item) => {
          return item.company == company;
        });
      }
      if (color !== "All") {
        tempData = tempData.filter((item) => {
          return item.colors.includes(color);
        });
      }
      if (price) {
        tempData = tempData.filter((item) => {
          return item.price <= price;
        });
      }
      return {
        ...state,
        filtered_product: tempData,
      };
    case "RESET_FILTERS":
      return {
        ...state,
        filters: {
          text: "",
          category: "All",
          company: "All",
          color: "All",
          maxPrice: state.filters.maxPrice,
          minPrice: 0,
          price: state.filters.maxPrice,
        },
      };
    default:
      return state;
  }
};

export default filterReducer;
