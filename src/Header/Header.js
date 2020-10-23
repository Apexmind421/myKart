import React,{useEffect} from 'react';
import Logo from './logo.png'
import "./Header.css"
import { Link } from "react-router-dom";
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import PersonIcon from '@material-ui/icons/Person';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import { useStateValue } from "../StateProvider/StateProvider";
import { useDispatch, useSelector } from 'react-redux';
import { addToCart,FetchCart } from "../StateProvider/Actions/cartAction";

function Header() {
    const cartItems = useSelector(state => state.cart);
    const { loading, cart, error } = cartItems;
    const auth = useSelector(state => state.auth);
    const { userInfo } = auth;
    const dispatch = useDispatch();
    console.log("XXXXXX "+JSON.stringify(userInfo));
    //const cartItems1= cart.length;
    //console.log("cartItems1 numer is "+cartItems1);
    console.log("cartItems1 numer is here "+cart);
    /*
        const handleAuthenticaton = () => {
          if (user) {
            auth.signOut();
          }
        }
    */
    
    useEffect(() => {
        if(userInfo){
            dispatch(FetchCart());
        }
        return () => {
            
        }
    }, [])

    const logOut = (e) => {
        e.preventDefault();
        dispatch({ type: "LOGOUT" });
    }

    return (
        <nav className="header">
            <Link to="/">
                <img className="header_logo" src={Logo} alt="logo" />
            </Link>

            <div className="header_search">
                <input type="text" className="header_searchBar" />
                <SearchIcon className="header_searchIcon" />
            </div>

            <div className="header_nav">
            
                {userInfo ?
                    <>
                        <div className="header_nav_options">
                            <span>Hi {userInfo.user.firstName}</span>
                        </div>
                        <div className="header_nav_options">
                            <Link to="/" className="header_link">
                                <div>
                                    <PersonIcon />
                                    <span>My Account</span>
                                </div>
                            </Link>
                        </div>
                        <div className="header_nav_options">
                                <div className="header_logout" onClick={logOut}>
                                    <LockOpenIcon />
                                    <span>
                                        Log out
                                    </span>
                                </div>
                        </div>
                    </> :
                    <>
                        <div className="header_nav_options">
                            <Link to="/login" className="header_link">
                                <div>
                                    <LockOpenIcon />
                                    <span>Login</span>
                                </div>
                            </Link>
                        </div>
                    </>
                }
                <div className="header_nav_options">
                    <Link to="/" className="header_link">
                        <div>
                            <span>More</span>
                            <ArrowDropDownIcon />
                        </div>
                    </Link>
                </div>

                <Link to="/checkout" className="header_link">
                    <div className="header_option_three">
                        <ShoppingBasketIcon />
                        {cart?
                        <span className="header_option_two">{cart.length}</span>:
                        <span className="header_option_two">0</span>
                        }
                    </div>
                </Link>
           
            </div>
        </nav>
    );
}

export default Header

