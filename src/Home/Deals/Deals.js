import React from 'react'
import Banner3 from '../../Images/MI02.jpg';
import oneplus1 from '../../Images/OnePlus01.jpeg';
import galaxy01 from '../../Images/galaxy02.png';
import ProductItem from '../../Product/ProductItem';
import { Link } from 'react-router-dom';
import './Deals.css';

function Deals() {
    return (
        <div className="home_row">
                <div className="home_hot_deals">
                        <h2 className="home_hot_deals_title">Deals of the day{/*🔥*/}</h2>
                        <Link to="/products" className="home_hot_deals_link">
                            <span>
                                View All
                            </span>
                        </Link>
                </div>
                <div className="home_hot_deals_products">
                    <ProductItem
                        id="123"
                        title="Redmi 9 Plus AquaBlue 8GB RAM 128GB Storage"
                        price={15000}
                        image={Banner3}
                        discount="30"
                    />

                    <ProductItem
                        id="12345"
                        title="One Plus 9 Plus 8 GB RAM 256GB Storage"
                        price={45000}
                        image={oneplus1}
                        discount="5"
                    />

                    <ProductItem
                        id="12345"
                        title="Samsung Galxy Z fold z2 12GB RAM 512 Storage"
                        price={150000}
                        image={galaxy01}
                        discount="5"
                    />
                </div>
            </div>
    )
}

export default Deals
