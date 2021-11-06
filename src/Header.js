import React from 'react'
import "./Header.css"
import { Link } from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';

function Header() {
    return (
        <nav className="header"> 
            {/* Logo on the left img*/}
            <Link to="/">
                <img 
                className ="header_logo" 
                src ="https://pngimg.com/uploads/amazon/amazon_PNG11.png" 
                alt="Amazon Logo"/> 
            </Link>

            {/* search box */}
            <div className="header_search">
                <input type="text" 
                className="header_searchInput" />
                <SearchIcon className="header_searchIcon" />
            </div>


            {/* 3 links */}
            <div className="header_nav" >
            {/*Link will not refresh the page like href:*/}
               
                <Link to="/login" className="header_link">
                    <div className="header_option">
                        <span className="header_optionLine1">Hello</span>
                        <span className="header_optionLine2">Sign In</span>
                    </div>
                </Link> 

                <Link to="/login" className="header_link">
                    <div className="header_option">
                        <span className="header_optionLine1">Returns</span>
                        <span className="header_optionLine2" >& Orders</span>
                    </div>
                </Link> 

                <Link to="/login" className="header_link">
                    <div className="header_option">
                        <span className="header_optionLine1">Your</span>
                        <span className="header_optionLine2">Prime</span>
                    </div>
                </Link> 

            </div>

            {/* Basket Icon with Number */}
            <Link to="/checkout" className="header_link">
                <div className="header_optionBasket">
                
                <ShoppingBasketIcon />
                {/*number of items in basket*/}
                <span className="header_optionLine2 header_basketCount">0</span>
                </div>
            </Link>

        </nav>
    )
}

export default Header
