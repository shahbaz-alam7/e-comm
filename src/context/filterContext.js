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
  useEffect(() => {
    dispatch({ type: "SORT_DATA", payload: products });
  }, [state.sorting_value]);
  return (
    <FilterContext.Provider value={{ ...state, sorting, setGridView }}>
      {children}
    </FilterContext.Provider>
  );
};
const useFilterContext = () => {
  return useContext(FilterContext);
};
export { FilterContextProvider, FilterContext, useFilterContext };
