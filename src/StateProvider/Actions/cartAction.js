import axios from "../../Helpers/axios";
import Cookie from 'js-cookie';
import { generatePublicUrl } from '../../Helpers/URLConfig';

export const addToCart = (id, quantity) => {
    return async (dispatch) => {
      try {
        const cart = {
          "cartItems":
            {
            "product": id,
            "quantity":quantity,
            "price": "80000"
            }
        }; 
        const { data } = await axios.post("/cart/addtocart", cart);
        dispatch({ type: "CART_ADD_ITEM", payload: data.cart.cartItems }); 
        Cookie.set('cart', JSON.stringify(data));
        console.log(JSON.stringify(data));
      } 
      catch (error) {
        dispatch({ type: "CART_ADD_ITEM_FAIL", payload: error.message });
      }
  }
}

export const FetchCart = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get("/cart/fetchCart");
      dispatch({ type: "CART_FETCH_ITEMS", payload: data.cart.cartItems }); 
      //Cookie.set('cart', JSON.stringify(data));
      console.log(JSON.stringify(data));
    } 
    catch (error) {
      dispatch({ type: "CART_FETCH_ITEMS_FAIL", payload: error.message });
    }
}
}

export const getCartProductDetails = (id, cart) => async (dispatch) => {
  try {
    dispatch({ type: "CART_PRODUCT_DETAILS_REQUEST", payload: id });
    const { data } = await axios.get('/product/fetchCartProductDetails?id=' + id);
    /*cart.forEach(cartItem=>{
      data.forEach((productDetail, i)=>{
        if(cartItem.id === productDetail._id){
          data[i
              ].quantity = cartItem.quantity;
          }
      })
    })*/
    console.log("JSHGDFJSDGFJH "+JSON.stringify(data));
    dispatch({ type: "CART_PRODUCT_DETAILS_SUCCESS", payload: data });
  } catch (error) {
    dispatch({ type: "CART_PRODUCT_DETAILS_FAIL", payload: error.message });
  }
}

export const removeFromCart = (productId) => (dispatch, getState) => {
  dispatch({ type: "CART_REMOVE_ITEM", payload: productId });

  const { cart: { cartItems } } = getState();
  Cookie.set("cartItems", JSON.stringify(cartItems));
}

const saveShipping = (data) => (dispatch) => {
  dispatch({ type: "CART_SAVE_SHIPPING", payload: data });
}

const savePayment = (data) => (dispatch) => {
  dispatch({ type: "CART_SAVE_PAYMENT", payload: data });
}


