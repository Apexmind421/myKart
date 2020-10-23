import React, { useEffect } from 'react';
import './CheckoutProduct.css';
import { useStateValue } from "../StateProvider/StateProvider";
import { removeFromCart } from '../StateProvider/Actions/cartAction';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function CheckoutProduct({id,title,image,price,discount,hideButton}) {
    //const [{ cart }, dispatch] = useStateValue();
    //const cart = useSelector(state => state.cart);
    //const { cartItems } = cart;
    
    const dispatch = useDispatch();
    const removeFromCart = (e) => {
        // remove the item from the cart
        dispatch(removeFromCart(id));
    };

    useEffect(() => {
      }, []);

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
              
                {!hideButton && (
                    <button onClick={removeFromCart}>Remove from Cart</button>
                )}
                  */}
            </div>
        </div>
    )
}

export default CheckoutProduct
