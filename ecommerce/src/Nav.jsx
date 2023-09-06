import React from "react"
import { FaTruckMoving } from 'react-icons/fa';
import{AiOutlineHeart} from 'react-icons/ai'
import{ BsBagCheck } from 'react-icons/bs'
import{ AiOutlineUser } from 'react-icons/ai'
import { Link } from "react-router-dom";
import {CiLogin} from 'react-icons/ci';
import {BiLogOut} from 'react-icons/bi';
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
               <h1> My Best Shopping house</h1>
                {/*<img src=".\image\ecommerce-logo-png-13.png" alt="logo" /> */}
            </div>
            <div className="search_box">
                <input 
                type="text"
                placeholder="Enter the product name" 
                autoComplete="off"
                />
                <button>Search</button>
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

                    <p></p>
                </div>
          
            </div>

        </div>
    </div>
    <div className="header">
        <div className="container">
            <ul>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/product'>Product</Link>
                </li>
                <li>
                    <Link to='/about'>About</Link>
                </li>
                <li>
                    <Link to='/contact'>Contact</Link>
                </li>
                
            </ul>
            <div className="auth">
                <CiLogin />
                <BiLogOut />
            </div>
        </div>
    </div>
    </>
  )
};

export default Nav;

