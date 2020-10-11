import React from 'react';
import Logo from './logo.png'
import "./Header.css"
import { Link } from "react-router-dom";
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import PersonIcon from '@material-ui/icons/Person';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import { useStateValue } from "../StateProvider/StateProvider";

function Header() {
    const [{ cart, user }, dispatch] = useStateValue();
/*
    const handleAuthenticaton = () => {
      if (user) {
        auth.signOut();
      }
    }
*/
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
                <Link to="/login" className="header_link">
                    <div className="header_option_three">
                        <LockOpenIcon/>
                        <span>Login</span>
                    </div>
                </Link>
                <Link to="/login" className="header_link">
                    <div className="header_option_three">    
                        <PersonIcon/>
                        <span>My Account</span>
                    </div>
                </Link>

                <Link to="/" className="header_link">
                    <div className="header_option_three">
                        <span>More</span>
                        <ArrowDropDownIcon />
                    </div>
                </Link>
               
                <Link to="/" className="header_link">
                    <div className="header_option">
                        <span className="header_option_one">Deliver to</span>
                        <span className="header_option_two">VIC 300</span>
                    </div>
                </Link>
                
                <Link to="/checkout" className="header_link">
                    <div className="header_option_three">
                        <ShoppingBasketIcon />
                        <span className="header_option_two">{cart?.length}</span>
                    </div>
                </Link>
            </div>
        </nav>
    );
}

export default Header

