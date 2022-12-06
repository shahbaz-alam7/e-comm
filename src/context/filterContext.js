import { useEffect } from "react";
import { createContext, useContext, useReducer } from "react";
import reducer from "../reducers/filterReducer";
import { useProductContext } from "./productContext";
const FilterContext = createContext();
const initialState = {
  filtered_product: [],
  all_product: [],
  grid_view: true,
  sorting_value: "lowest",
  filters: {
    text: "",
    category: "All",
    company: "All",
    color: "All",
    maxPrice: 0,
    minPrice: 0,
    price: 0,
  },
};
const FilterContextProvider = ({ children }) => {
  const { products } = useProductContext();
  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    dispatch({ type: "LOAD_FILTER_PRODUCTS", payload: products });
  }, [products]);
  // Set Grid View or List view
  const setGridView = (show) => {
    dispatch({ type: "GRID_VIEW", payload: show });
  };

  // Sorting function
  const sorting = () => {
    dispatch({ type: "GET_SORT_VALUE" });
  };
  // filter text value
  const updateFilterValue = (e) => {
    const { name, value } = e.target;
    dispatch({ type: "UPDATE_FILTER_VALUE", payload: { name, value } });
  };
  const reset = () => {
    dispatch({ type: "RESET_FILTERS" });
  };
  useEffect(() => {
    dispatch({ type: "FILTER_DATA" });
    dispatch({ type: "SORT_DATA" });
  }, [state.sorting_value, state.filters]);
  return (
    <FilterContext.Provider
      value={{ ...state, sorting, setGridView, reset, updateFilterValue }}
    >
      {children}
    </FilterContext.Provider>
  );
};
const useFilterContext = () => {
  return useContext(FilterContext);
};
export { FilterContextProvider, FilterContext, useFilterContext };
