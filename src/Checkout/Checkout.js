import React from 'react'
import "./Checkout.css";
import { useStateValue } from "../StateProvider/StateProvider";
import CheckoutProduct from './CheckoutProduct';
import CheckoutSum from './CheckoutSum';

function Checkout() {
    const [{ cart, user }, dispatch] = useStateValue();
    return (
        <div className="Checkout">

            {cart?.length === 0 ?
                (
                    <div>
                        <h2> Your Shopping Cart is empty</h2>
                        <p>You have no items in the cart. To buy the items, Add to cart next to the item</p>
                    </div>
                )
                : (
                    <div>
                        <div>
                            <h2 className="Checkout_Title">Your shopping cart</h2>
                        </div>
                        <div className="Checkout_Cart">
                            
                            <div className="Checkout_Products"> 
                                {cart.map(item => (
                                    <CheckoutProduct
                                        id={item.id}
                                        title={item.title}
                                        image={item.image}
                                        price={item.price}
                                        discount={item.discount}
                                    />
                                ))}
                            </div>

                            <div className="Checkout_Sum">
                                <CheckoutSum />
                            </div>

                        </div>
                    </div>

                )}



        </div>
    );
}

export default Checkout
