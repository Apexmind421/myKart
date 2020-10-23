/*export const getCartTotal = (cart) => 
    cart?.reduce((amount, item) => item.price + amount, 0);

function cartReducer(state = {}, action) {
    switch (action.type) {
        case "ADD_TO_CART":
            return {
                ...state,
                cart: [...state.cart, action.item],
            };
        case "EMPTY_CART":
            return {
                ...state,
                cart: []
            };
        case "REMOVE_FROM_CART":
            const index = state.cart.findIndex(
                (cartItem) => cartItem.id === action.id
            );
            let newCart = [...state.cart];

            if (index >= 0) {
                newCart.splice(index, 1);

            } else {
                console.warn(
                    `Cant remove product (id: ${action.id}) as its not in cart!`
                )
            }

            return {
                ...state,
                cart: newCart
            }
        default:
            return state;
    }
};
*/
export const getCartTotal = (cart) => 
    cart?.reduce((amount, item) => item.price + amount, 0);

const initState = { cart: [], shipping: {}, payment: {}, loading: false, error: null };
function cartReducer(state = initState, action) {
    switch (action.type) {
      case "CART_ADD_ITEM":
        return {loading: false, cart: action.payload};
       // return { cartItems: [...state.cartItems, item] };
      //case "CART_ADD_ITEM":
        //return loading: false, userInfo: action.payload}; 
      case "CART_ADD_ITEM_FAIL":
          return {loading: false, cart: action.payload};
      case "CART_REMOVE_ITEM":
        return { cartItems: state.cartItems.filter(x => x.product !== action.payload) };
      case "CART_SAVE_SHIPPING":
        return { ...state, shipping: action.payload };
      case "CART_SAVE_PAYMENT":
        return { ...state, payment: action.payload };
      case "CART_FETCH_ITEMS":
            return { loading: false, cart: action.payload };
      case "CART_FETCH_ITEMS_FAIL":
            return { loading: false, error: action.payload };   
      default:
        return state
    }
  }
export default cartReducer;
