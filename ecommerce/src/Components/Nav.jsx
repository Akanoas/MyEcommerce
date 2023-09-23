import React from "react"
import { FaTruckMoving } from 'react-icons/fa';
import{AiOutlineHeart} from 'react-icons/ai'
import{ BsBagCheck } from 'react-icons/bs'
import{ AiOutlineUser } from 'react-icons/ai'
import { Link } from "react-router-dom";
import  './Nav.css'
const Nav = () => {
  return (
    <>
    <div className="free">
        <div className="icon">
        <FaTruckMoving />
        </div><p>FREE Shipping when shopping up to $99</p>
    </div>
    <div className="main_header">
        <div className="container">
            <div className="logo">
               <p className="text"> My Best Shopping house</p>
                {/*<img src=".\image\ecommerce-logo-png-13.png" alt="logo" /> */}
            </div>
            <div className="search_box">
                <input className= "input_for_search" type="text"
                placeholder="Enter the product name" 
                autoComplete="off"
                />
                <button className="button_search">Search</button>
            </div>
            <div className="icon">
                <div className="account">
                    <div className="user_icon">
                    <AiOutlineUser />
                    </div>
                    <p>Hello, user</p>
                </div>
                <div className="second_icon">
                    <Link to="/" className="link"> <AiOutlineHeart /> </Link>
                    <Link to="/cart" className="link"> <BsBagCheck /> </Link>
                </div>
          
            </div>

        </div>
    </div>
    <div className="header">
        <div className="container">
            <div className="nav">
                <ul>
                    <li>
                        <Link to='/' className="links_nav">Home</Link>
                    </li>
                    <li>
                        <Link to='/product' className="links_nav">Product</Link>
                    </li>
                    <li>
                        <Link to='/about' className="links_nav">About</Link>
                    </li>
                    <li>
                        <Link to='/contact' className="links_nav">Contact</Link>
                    </li>
                    
                </ul>
            </div>
           
            <div className="auth">
                
                <button > <Link to='/Login' className="login_link">Login Here</Link> </button>
              
            </div>
        </div>
    </div>
    </>
  )
};

export default Nav;

