import React from 'react';
import './CheckoutProduct.css';
import { useStateValue } from "../StateProvider/StateProvider";

function CheckoutProduct({ id, image, title, price, discount, hideButton }) {
    const [{ cart }, dispatch] = useStateValue();

    const removeFromCart = () => {
        // remove the item from the cart
        dispatch({
            type: 'REMOVE_FROM_CART',
            id: id,
        })
    }

    return (
        <div className='CheckoutProduct'>
            <img className='CheckoutProduct_image' src={image} />

            <div className='CheckoutProduct_info'>
                <p className='CheckoutProduct_title'>{title}</p>
                <p className="CheckoutProduct_price">
                    <small>Rs </small>
                    <strong>{price}</strong>
                    <small className="CheckoutProduct_discount"> (includes {discount}% discount )</small>
                </p>
               {/*
                <div className="CheckoutProduct_rating">
                    {Array(rating)
                    .fill()
                    .map((_, i) => (
                        <p>🌟</p>
                    ))}
                </div>
                */}
                {!hideButton && (
                    <button onClick={removeFromCart}>Remove from Cart</button>
                )}
            </div>
        </div>
    )
}

export default CheckoutProduct
