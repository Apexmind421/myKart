import React, { useEffect, useState } from 'react';
import "./ProductItem.css";

import { Link } from "react-router-dom";


function ProductItem({id,title,image,price,discount}) {
 

  return (
    
        <div className="productitem">
          
          <div className="productitem_info">
            
            <p className="productitem_title">{title}</p>
            <p className="productitem_price">
              <small>Rs</small>
              <strong>{price}</strong>
              <strong className="productitem_discount">{discount}%Off</strong>
            </p>
            
            {/*
            <div className="product__rating">
              {Array(rating)
                .fill()
                .map((_, i) => (
                  <p>🌟</p>
                ))}
            </div>
            */}
          </div>
    
          <img src={image} alt="" />
           
          <button>
            <Link to={`/product/${id}`} className="productitem_link">Shop Now</Link>
          </button>
          
        </div>
        
        
      );
}

export default ProductItem
