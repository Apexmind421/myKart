import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { listProducts } from '../StateProvider/Actions/productAction';
import "./Products.css";
import Banner3 from '../Images/MI02.jpg';
import Banner1 from '../Images/MI01.jpg';
import oneplus1 from '../Images/OnePlus01.jpeg';
import galaxy01 from '../Images/galaxy02.png';
import galaxy02 from '../Images/galaxy01.jpg';
import { generatePublicUrl } from '../Helpers/URLConfig';
import { useParams,Link } from "react-router-dom";

function Products(props) {
    const [searchKeyword, setSearchKeyword] = useState('');
    const [sortOrder, setSortOrder] = useState('');
    //const category = props.match.params.id ? props.match.params.id : '';
    let {id}  = useParams();
    const category = id? id: '';
    //console.log("category"+JSON.stringify(category));
    //const category = '';
    const productList = useSelector((state) => state.productList);
    const { products, loading, error } = productList;
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(listProducts(category));
        return () => {

        }
    }, [category]);

    const renderProducts = (e) => {
        e.preventDefault();
        dispatch(listProducts(category, searchKeyword, sortOrder));
    }

    const listSort = (e) => {
        setSortOrder(e.target.value);
        dispatch(listProducts(category, searchKeyword, sortOrder));
    };

    const discount = 10;
    return (
        <div className="products_page_containter">
            <section className="products_containter">
                <div className="products_blocks">
                    <div className="products_filter_block">
                        <h3>Filters</h3>
                        <p>Categories</p>
                        <p>Ratings</p>
                        <p>Price</p>
                        <p>Brand</p>
                    </div>
                    <div className="products_product_block">

                        <div className="products_product_block_top">
                            <div className="products_product_list_controls_number">Showing Over {products.length} products</div>
                            <div className="products_product_list_control">
                                <div className="products_product_list_control_view_switcher">
                                    <span className="products_product_list_control_view_switcher_1">
                                        View as:
                                    </span>
                                    <button id="gridView" className="products_product_list_control_view_switcher_2">Grid</button>
                                    <button id="listView" className="products_product_list_control_view_switcher_2">List</button>
                                </div>
                            </div>
                        </div>
                        <div className="products_product_block_list_container">
                            <div className="products_product_block_list_container_1">
                                {products.map((product) => (
                                    <Link to={`/product/`+product._id} className="productitem_link">
                                    <div className="products_product_block_list_item">
                                        
                                        <img className="products_product_block_list_item_image" src={generatePublicUrl(product.productImages[0].img)} alt="" />

                                        <div className="products_product_block_list_item_details">
                                            <div className="products_product_block_list_item_details_1">
                                                <p>{product.name}</p>
                                                <div>
                                                    <small>Rs</small>
                                                    <strong>{product.price}</strong>
                                                    <strong className="productitem_discount">{discount}%Off</strong>
                                                </div>
                                                <h5>{product.description}</h5>
                                                <div>Items in Stock : {product.quantity}</div>
                                            </div>
                                        </div>
                                        
                                    </div>
                                    </Link>
                                ))}
                            </div>
                        </div>

                    </div>

                </div>
            </section>
        </div>
    )
}

export default Products
