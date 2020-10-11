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
