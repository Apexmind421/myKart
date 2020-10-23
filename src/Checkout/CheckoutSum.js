import React, { useEffect } from 'react'
import './CheckoutSum.css';
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "../StateProvider/StateProvider";
import { getCartTotal } from "../StateProvider/cartReducer";
import { useHistory } from "react-router-dom";
import { addToCart, removeFromCart } from '../StateProvider/Actions/cartAction';
import { useDispatch, useSelector } from 'react-redux';

function CheckoutSum(props) {
   // const history = useHistory();
   //const [{ cart }, dispatch] = useStateValue();
   const cartItems = useSelector(state => state.cart);
   const { cart } = cartItems;
    //const cart = useSelector(state => state.cart);
    //const { cartItems } = cart;
    return (
        <div className="CheckoutSum">
        <CurrencyFormat
            renderText={(value) => (
            <div>
                <p>
                {/* To Do Work */}
                    Total amount ({cart.length} items): <strong>{value}</strong>
                </p>
                <small className="CheckoutSum_Conditions">
                    <input type="checkbox" /> Agree to the Terms & Conditions
                </small>
            </div>
            )}
            decimalScale={2}
            value={getCartTotal(cart)} // To Do Work
            displayType={"text"}
            thousandSeparator={true}
            prefix={"Rs"}
        />

        <button onClick={e => props.history.push('/payment')}>Proceed to Checkout</button>
        </div>
    )
}

export default CheckoutSum
