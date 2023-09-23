import { Link } from "react-router-dom"
import { AiOutlineArrowRight } from 'react-icons/ai';
import './Home.css'
export default function Home(){
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
                        <div className="img-box">
                            <img src="../../public/image/men-clothings.jpg" alt="men" />
                        </div>
                        <div className="detail">
                            <p>23products</p>
                        </div>
                    </div>
                    <div className="box">
                        <div className="img-box">
                            <img src="../../public/image/women-Clothing.jpg" alt="women" />
                        </div>
                        <div className="detail">
                            <p>83products</p>
                        </div>
                    </div>
                    <div className="box">
                        <div className="img-box">
                            <img src="../../public/image/jwerly.jpg" alt="jwerly" />
                        </div>
                        <div className="detail">
                            <p>23products</p>
                        </div>
                    </div>
                    <div className="box">
                        <div className="img-box">
                            <img src="../../public/image/electronics.jpg" alt="electro" />
                        </div>
                        <div className="detail">
                            <p>23products</p>
                        </div>
                    </div>

                </div>
            </div>
        
        </>

    )
}