const initState = {
    products: [],
    loading: false,
    error: null
};
function productListReducer(state = initState, action) {
    switch (action.type) {
        //Log In
        case "PRODUCT_LIST_REQUEST":
            return { loading: true , products: [] };
        case "PRODUCT_LIST_REQUEST_SUCCESS":
            return { loading: false, products: action.payload };
        case "PRODUCT_LIST_REQUEST_FAILED":
            return { loading: false, error: action.payload };
        default: 
            return state;
    }
}

export default productListReducer;