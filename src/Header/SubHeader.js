import React, { useEffect } from 'react';
import './SubHeader.css';
import { useSelector, useDispatch } from 'react-redux';
import { getAllCategory } from '../StateProvider/Actions/categoryAction';
import { Link } from "react-router-dom";

/**
* @author
* @function SubHeader
**/

const SubHeader = (props) => {

  const category = useSelector((state) => state.category);
  const {categories, loading, error} = category;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCategory());
  }, []);

  console.log("XYZ"+categories);
  const renderCategories = (categories) => {
    let myCategories = [];
    for (let category of categories) {
        
      myCategories.push(
        <li key={category.name}>
          {
            category.parentId ? <Link to={`/products/`+category._id} className="subHeader_link">{category.name}</Link> : 
            <span>    
                <Link to={`/products/`+category._id} className="subHeader_link">
                    {category.name}
                </Link>
            </span>
          }
          {category.children.length > 0 ? (<ul>{renderCategories(category.children)}</ul>) : null}
        </li>
      );
    }
    return myCategories;
  }

  return (
    <div className="subHeader">
        {loading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>{error} </div>
      ) : (
            <ul>
                {renderCategories(categories)}
            </ul>
      )}
    </div>
  )

}

export default SubHeader


