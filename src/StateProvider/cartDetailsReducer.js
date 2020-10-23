const initState = { 
    cartDetails: [], 
    loading: false, 
    error: null 
};
function cartDetailsReducer(state = initState, action) {
    switch (action.type) {
        case "CART_PRODUCT_DETAILS_REQUEST":
          return { loading: true, cartDetails:[] };
        case "CART_PRODUCT_DETAILS_SUCCESS":
          return { loading: false, cartDetails: action.payload };
        case "CART_PRODUCT_DETAILS_FAIL":
          return { loading: false, error: action.payload }; 
      default:
        return state
    }
  }
export default cartDetailsReducer;