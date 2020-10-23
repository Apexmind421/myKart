import authReducer from "./authReducer";
import productListReducer from "./productListReducer";
import productDetailsReducer from "./productDetailsReducer";
import productSaveReducer from "./productSaveReducer";
import productDeleteReducer from "./productDeleteReducer";
import productReviewSaveReducer from "./productReviewSaveReducer";
import cartReducer from "./cartReducer";
import { combineReducers } from 'redux';
import categoryReducer from "./categoryReducer";
import cartDetailsReducer from "./cartDetailsReducer";

const rootReducer = combineReducers({
    auth : authReducer,
    cart: cartReducer,
    category: categoryReducer,
    productDelete: productDeleteReducer,
    productList: productListReducer,
    productDetails: productDetailsReducer,
    productSave: productSaveReducer,
    productReviewSave: productReviewSaveReducer,
    cartDetails: cartDetailsReducer
});

export default rootReducer; 