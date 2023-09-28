import { useState } from "react";

import { Link } from "react-router-dom"
import { AiOutlineArrowRight } from 'react-icons/ai';
import { FiTruck } from 'react-icons/fi'
import { BsCurrencyDollar} from 'react-icons/bs'
import { CiPercent} from 'react-icons/ci'
import { BsHeadphones } from 'react-icons/bs'
import ProductList from "../Components/ProductList";
import Footer from "../Components/Footer";
import './Home.css'
export default function Home({cart, setcart}){
    
    return(
        <>
            <div className="top_banner">
                <div className="detail">
                    <h2 className="title">The Most wanted Shoes of 2023</h2>
                    <Link to='/product' className="link">Shop now <AiOutlineArrowRight /></Link>
                </div>
                <div className="img-box">
                    <img src="../../public/image/th.jpg" alt="slider" />
                </div>

            </div>
            <div className="product-type">
                <div className="container">
                    <div className="box">
                        <div className="img-box-product">
                            <img src="../../public/image/men-clothings.jpg" alt="men" className="box-img"/>
                        </div>
                        <div className="detail">
                            <p>50 products</p>
                        </div>
                    </div>
                    <div className="box">
                        <div className="img-box-product">
                            <img src="../../public/image/women-Clothing.jpg" alt="women"  className="box-img"/>
                        </div>
                        <div className="detail">
                            <p>200 products</p>
                        </div>
                    </div>
                    <div className="box">
                        <div className="img-box-product">
                            <img src="../../public/image/jwerly.jpg" alt="jwerly" className="box-img"/>
                        </div>
                        <div className="detail">
                            <p>89 products</p>
                        </div>
                    </div>
                    <div className="box">
                        <div className="img-box-product">
                            <img src="../../public/image/electronics.jpg" alt="electro" className="box-img"/>
                        </div>
                        <div className="detail">
                            <p>23 products</p>
                        </div>
                    </div>

                </div>
                <div className="about">
                    <div className="container">
                        <div className="icon">
                            <FiTruck />
                        </div>
                        <div className="detail">
                            <h3>Free Shipping</h3>
                            <p>Order up to $99</p>
                        </div>

                    </div>
                    <div className="container">
                        <div className="icon">
                            <BsCurrencyDollar />
                        </div>
                        <div className="detail">
                            <h3>Return & Refund</h3>
                            <p>Money Back Guaranty</p>
                        </div>

                    </div>
                    <div className="container">
                        <div className="icon">
                            <CiPercent />
                        </div>
                        <div className="detail">
                            <h3>Member Discount</h3>
                            <p>On every Order</p>
                        </div>

                    </div>
                    <div className="container">
                        <div className="icon">
                            <BsHeadphones />
                        </div>
                        <div className="detail">
                            <h3>Customer Support</h3>
                            <p>24/7 Call</p>
                        </div>

                    </div>

                </div>
            </div>
            <div className="product">
                <div className="container">
                < ProductList cart={cart} setCart={setcart}/>

                </div>

            </div>
            <Footer />
        
        </>

    )
}