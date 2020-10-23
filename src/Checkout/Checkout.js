import React, { useEffect } from 'react'
import "./Checkout.css";
import { useStateValue } from "../StateProvider/StateProvider";
import CheckoutProduct from './CheckoutProduct';
import CheckoutSum from './CheckoutSum';
import { addToCart } from '../StateProvider/Actions/cartAction';
import { getCartProductDetails } from '../StateProvider/Actions/cartAction';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {generatePublicUrl} from '../Helpers/URLConfig';

function Checkout(props) {
    const cartItems = useSelector(state => state.cart);
    const { cart } = cartItems;
    const cartProductDetails = useSelector((state) => state.cartDetails);
    const { cartDetails, loading, error } = cartProductDetails;
    //const [{ cart, user }, dispatch] = useStateValue();
    //const cart = useSelector(state => state.cart);
    //const { cartItems } = cart;
    //const productId = props.match.params.id;
    //const quantity = props.location.search ? Number(props.location.search.split("=")[1]) : 1;
    const dispatch = useDispatch();

    useEffect(() => {
        let cartProducts = [];
        if (cart) {
            if (cart.length > 0) {
                cart.forEach(item => {
                    cartProducts.push(item.product);
                });
                dispatch(getCartProductDetails(cartProducts, cart));
                console.log("Inside use Effect");
            }
        };
        return () => {

        }
    }, [cart]);

    console.log("cartDetails " + JSON.stringify(cartDetails));

    const renderItems = () => {

        cartDetails && cartDetails.map(item => (
            <CheckoutProduct
                id={item._id}
                title={item.name}
                //image={Banner3}
                price={item.price}
                discount="10% Off"
            />
        ))
    }


    return (
        <div className="Checkout">

            {cart.length === 0 ?
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
                            {/* <div className="Checkout_Products">
                                        {renderItems()}
                                    </div>*/}

                            <div className="Checkout_Products">
                                {cartDetails.map(item => (
                                    <CheckoutProduct
                                        id={item._id}
                                        title={item.name}
                                        image={generatePublicUrl(item.productImages[0].img)}
                                        price={item.price}
                                        discount="10% Off"
                                    />
                                ))}
                            </div>
                            <div className="Checkout_Sum">
                                <CheckoutSum />
                            </div>
                        </div>
                        
                            

                    </div>
                            

    )
}
                

        </div >
    );
}

export default Checkout
