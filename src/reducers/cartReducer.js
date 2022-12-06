const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      const { id, currColor, qty, product } = action.payload;
      let cartProduct;
      cartProduct = {
        id: id + "_" + currColor,
        name: product.name,
        qty,
        currColor,
        image: product.image[0].url,
        price: product.price,
        maxQty: product.stock,
      };
      let isDuplicate = state.cart.find((item) => {
        return item.id === cartProduct.id;
        // return item.id === id;
      });
      if (isDuplicate) {
        let updatedProduct = state.cart.map((item) => {
          if (item.id === cartProduct.id) {
            let newQty =
              item.qty + cartProduct.qty >= item.maxQty
                ? item.maxQty
                : item.qty + cartProduct.qty;
            return {
              ...item,
              qty: newQty,
            };
          } else return item;
        });
        return {
          ...state,
          cart: updatedProduct,
        };
      } else {
        return {
          ...state,
          cart: [...state.cart, cartProduct],
          total_item: state.total_item + qty,
          total_price: 0,
        };
      }
    case "REMOVE_ITEM":
      let tempCart = state.cart.filter((item) => {
        return item.id !== action.payload;
      });
      return {
        ...state,
        cart: tempCart,
      };
    case "CLEAR_CART":
      return {
        ...state,
        cart: [],
      };
    case "INCREMENT": {
      console.log(action.payload);
      let updateProductqty = state.cart.map((item) => {
        if (item.id === action.payload) {
          let incQty = item.qty + 1;
          if (incQty >= item.maxQty) incQty = item.maxQty;
          return {
            ...item,
            qty: incQty,
          };
        } else return item;
      });
      return {
        ...state,
        cart: updateProductqty,
      };
    }
    case "DECREMENT": {
      let updateProductqty = state.cart.map((item) => {
        if (item.id === action.payload) {
          let decQty = item.qty - 1;
          if (decQty <= 1) decQty = 1;
          return {
            ...item,
            qty: decQty,
          };
        } else return item;
      });
      return {
        ...state,
        cart: updateProductqty,
      };
    }
    // case "TOTAL_ITEM": {
    //   let total_item = state.cart.reduce((total, item) => {
    //     return (total += item.qty);
    //   }, 0);
    //   return {
    //     ...state,
    //     total_item: total_item,
    //   };
    // }
    // case "TOTAL_PRICE": {
    //   let total_price = state.cart.reduce((total, item) => {
    //     return (total += item.qty * item.price);
    //   }, 0);
    //   return {
    //     ...state,
    //     total_price: total_price,
    //   };
    // }
    case "TOTAL": {
      let { total_item, total_price } = state.cart.reduce(
        (acc, item) => {
          acc.total_item += item.qty;
          acc.total_price += item.qty * item.price;
          return acc;
        },
        {
          total_item: 0,
          total_price: 0,
        }
      );
      return {
        ...state,
        total_item,
        total_price,
      };
    }
    default:
      return {
        ...state,
      };
  }
};
export default cartReducer;
