import React from 'react'
import './CheckoutSum.css';
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "../StateProvider/StateProvider";
import { getCartTotal } from "../StateProvider/reducer";
import { useHistory } from "react-router-dom";

function CheckoutSum() {
    const history = useHistory();
    const [{ cart }, dispatch] = useStateValue();
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

        <button onClick={e => history.push('/payment')}>Proceed to Checkout</button>
        </div>
    )
}

export default CheckoutSum
