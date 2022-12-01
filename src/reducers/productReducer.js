const ProductReducer = (state, action) => {
  switch (action.type) {
    case "SET_LOADING":
      return { ...state, isLoading: true };
    case "MY_API_ERROR":
      return { ...state, isLoading: false, isError: true };
    case "MY_API_DATA":
      const featuredItems = action.payload.filter(
        (currElem) => currElem.featured === true
      );
      return {
        ...state,
        products: action.payload,
        isLoading: false,
        isError: false,
        featuredProduct: featuredItems,
      };
    case "SET_SINGLE_LOADING":
      return { ...state, isSingleProductLoading: true };
    case "SET_SINGLE_ERROR":
      return { ...state, isSingleProductLoading: false, isSingleError: true };
    case "SET_SINGLE_PRODUCT":
      return {
        ...state,
        isSingleProductLoading: false,
        singleProduct: action.payload,
      };
    default:
      return { ...state };
  }
};
export default ProductReducer;
