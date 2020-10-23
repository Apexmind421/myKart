
  


  function productReviewSaveReducer(state = {}, action) {
    switch (action.type) {
      case "PRODUCT_REVIEW_SAVE_REQUEST":
        return { loading: true };
      case "PRODUCT_REVIEW_SAVE_SUCCESS":
        return { loading: false, review: action.payload, success: true };
      case "PRODUCT_REVIEW_SAVE_FAIL":
        return { loading: false, errror: action.payload };
      case "PRODUCT_REVIEW_SAVE_RESET":
        return {};
      default:
        return state;
    }
  }
  
  export default 

    productReviewSaveReducer
  ;
