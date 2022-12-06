import { createContext, useReducer, useContext, useEffect } from "react";
import reducer from "../reducers/cartReducer";
const CartContext = createContext();
const getLocalCartItems = () => {
  let localCartItems = localStorage.getItem("cartItems");
  localCartItems = JSON.parse(localCartItems);
  if (!Array.isArray(localCartItems)) return [];
  return localCartItems;
};
const initialState = {
  cart: getLocalCartItems(),
  total_item: 0,
  total_price: 0,
  shippingFees: 50000,
};
const CartContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const addtoCart = (id, currColor, qty, product) => {
    dispatch({ type: "ADD_TO_CART", payload: { id, currColor, qty, product } });
  };
  const deleteItem = (id) => {
    dispatch({ type: "REMOVE_ITEM", payload: id });
  };
  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };
  const increaseQty = (id) => {
    dispatch({ type: "INCREMENT", payload: id });
  };
  const decreaseQty = (id) => {
    dispatch({ type: "DECREMENT", payload: id });
  };
  useEffect(() => {
    // dispatch({ type: "TOTAL_ITEM" });
    dispatch({ type: "TOTAL" });
    localStorage.setItem("cartItems", JSON.stringify(state.cart));
  }, [state.cart]);
  return (
    <CartContext.Provider
      value={{
        ...state,
        addtoCart,
        deleteItem,
        increaseQty,
        decreaseQty,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
const useCartContext = () => {
  return useContext(CartContext);
};
export { CartContext, CartContextProvider, useCartContext };
