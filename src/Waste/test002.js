import React from 'react';
import "./ProductItem.css";
import { useStateValue } from "../StateProvider/StateProvider";
import { Link } from "react-router-dom";

function ProductItem({ id, title, image, price, discount }) {
  const [{ cart }, dispatch] = useStateValue();

  const addToCart = () => {
    // dispatch the item into the data layer
    dispatch({
      type: "ADD_TO_CART",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        discount: discount,
      },
    });
  };

  return (

    <div>
      <div className="back-to-result">
        <Link to="/">Back to result</Link>
      </div>
      {loading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>{error} </div>
      ) : (
            <>
              <div className="details">
                <div className="details-image">
                  <img src={product.image} alt="product"></img>
                </div>
                <div className="details-info">
                  <ul>
                    <li>
                      <h4>{product.name}</h4>
                    </li>
                    <li>
                      <a href="#reviews">
                        <Rating
                          value={product.rating}
                          text={product.numReviews + ' reviews'}
                        />
                      </a>
                    </li>
                    <li>
                      Price: <b>${product.price}</b>
                    </li>
                    <li>
                      Description:
                <div>{product.description}</div>
                    </li>
                  </ul>
                </div>
                <div className="details-action">
                  <ul>
                    <li>Price: {product.price}</li>
                    <li>
                      Status:{' '}
                      {product.countInStock > 0 ? 'In Stock' : 'Unavailable.'}
                    </li>
                    <li>
                      Qty:{' '}
                      <select
                        value={qty}
                        onChange={(e) => {
                          setQty(e.target.value);
                        }}
                      >
                        {[...Array(product.countInStock).keys()].map((x) => (
                          <option key={x + 1} value={x + 1}>
                            {x + 1}
                          </option>
                        ))}
                      </select>
                    </li>
                    <li>
                      {product.countInStock > 0 && (
                        <button
                          onClick={handleAddToCart}
                          className="button primary"
                        >
                          Add to Cart
                        </button>
                      )}
                    </li>
                  </ul>
                </div>
              </div>
              <div className="content-margined">
                <h2>Reviews</h2>
                {!product.reviews.length && <div>There is no review</div>}
                <ul className="review" id="reviews">
                  {product.reviews.map((review) => (
                    <li key={review._id}>
                      <div>{review.name}</div>
                      <div>
                        <Rating value={review.rating}></Rating>
                      </div>
                      <div>{review.createdAt.substring(0, 10)}</div>
                      <div>{review.comment}</div>
                    </li>
                  ))}
                  <li>
                    <h3>Write a customer review</h3>
                    {userInfo ? (
                      <form onSubmit={submitHandler}>
                        <ul className="form-container">
                          <li>
                            <label htmlFor="rating">Rating</label>
                            <select
                              name="rating"
                              id="rating"
                              value={rating}
                              onChange={(e) => setRating(e.target.value)}
                            >
                              <option value="1">1- Poor</option>
                              <option value="2">2- Fair</option>
                              <option value="3">3- Good</option>
                              <option value="4">4- Very Good</option>
                              <option value="5">5- Excelent</option>
                            </select>
                          </li>
                          <li>
                            <label htmlFor="comment">Comment</label>
                            <textarea
                              name="comment"
                              value={comment}
                              onChange={(e) => setComment(e.target.value)}
                            ></textarea>
                          </li>
                          <li>
                            <button type="submit" className="button primary">
                              Submit
                      </button>
                          </li>
                        </ul>
                      </form>
                    ) : (
                        <div>
                          Please <Link to="/signin">Sign-in</Link> to write a review.
                        </div>
                      )}
                  </li>
                </ul>
              </div>
            </>
          )}
    </div>
  );
}

export default ProductItem


import React from 'react';
import "./Product.css";
import { useParams, useHistory } from 'react-router-dom';
import { useStateValue } from "../StateProvider/StateProvider";

function Product({ title, image, price, discount }) {
    let { id } = useParams();
    const history = useHistory();
    const [{ cart }, dispatch] = useStateValue();
    const addToCart = () => {
        // dispatch the item into the data layer
        dispatch({
            type: "ADD_TO_CART",
            item: {
                id: { id },
                title: title,
                image: image,
                price: price,
                discount: discount,
            },
        });
    };

    return (
        <div className="product">
            <div className="product_left">
                <p className="product_title">{title}</p>
                <div className="product_rating">
                    {Array(4)
                        .fill()
                        .map((_, i) => (
                            <p>🌟</p>
                        ))}
                </div>
                <p className="product_price">
                    <strong className="product_total_price"> ₹{price}</strong>
                    <strong className="product_discount">  {discount}%Off</strong>
                </p>
                <p className="product_bestpricetag"></p>
                <div className="product_avail_offers">
                    <p className="product_offers"> Available Offers: </p>
                    <ul className="product_avail_offers_list">
                        <li><span className="product_offers_list">includes Diwali bumper bonanza offer</span><span> Get 10% off(price inclusive of discount)</span></li>
                        <li><span className="product_offers_list">includes Dasara Super offer</span></li>
                        <li><span className="product_offers_list">includes Christmas Santa offer</span></li>
                    </ul>
                </div>
                <div className="product_description">
                    <div className="product_description_1">Product Information</div>
                    <div className="product_description_2">13MP quad rear camera, ultra-wide, macro, portrait, AI scene recognition, HDR, pro mode | 8 MP front camera 16.58 centimeters (6.53-inch) FHD+ capacitive multi-touch touchscreen with 2340 x 1080 pixels resolution, 394 ppi pixel density and 19.5:9 aspect ratio Memory, Storage & SIM: 4GB | 64GB internal memory expandable up to 512GB | Dual SIM (nano+nano) + Dedicated SD card slot Android v10 operating system with 2.0 GHz Mediatek Helio G80 octa core processor 5020 mAh large lithium-polymer battery with 18W charging support 1 year manufacturer warranty for device and 6 months manufacturer warranty for in-box accessories including batteries from the date of purchase Box also includes: Power adapter, USB cable, SIM eject tool, warranty card, user guide, clear soft case</div>
                </div>
                <div className="product_specification">
                    <div className="product_specification_1">Product Specification</div>
                    <div className="product_specification_2">
                        <ul>
                            <li><span>In the Box</span>	Power adapter, USB cable, SIM eject tool, warranty card, user guide, clear soft case</li>
                            <li><span>Model Number</span> M2004J191 </li>
                            <li><span>Model Name</span> Redmi 9 Prime </li>
                            <li><span>Model Color</span> Aqua Blue </li>
                        </ul>
                    </div>
                </div>

            </div>
            <div className="product_right">

                    <img src={image} alt="" />
                    <div className="product_right_2">
                        <button onClick={addToCart}>Add To Cart</button>
                        <button onClick={e => history.push('/payment')}>Buy Now</button>    
                    </div>
            </div>
        </div>
    )
}

export default Product








console.log({generatePublicUrl(product.productImages[0].img)});


dispatch({
  type: "ADD_TO_BASKET_1",
  item: {
      id: product._id,
      title: product.name,
      image: image,
      price: price,
      rating: rating,
  },
});


{loading ? (<div>Loading...</div>) : error ? (<div>{error} </div>) : (
  <>
  </>
            )}