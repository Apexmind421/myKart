function productSaveReducer(state = { product: {} }, action) {
    switch (action.type) {
      case "PRODUCT_SAVE_REQUEST":
        return { loading: true };
      case "PRODUCT_SAVE_SUCCESS":
        return { loading: false, success: true, product: action.payload };
      case "PRODUCT_SAVE_FAIL":
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  }
  export default productSaveReducer;