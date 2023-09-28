import { AiFillFacebook } from 'react-icons/ai'
import { AiFillTwitterCircle } from 'react-icons/ai';
import { AiFillInstagram } from 'react-icons/ai';
import './Footer.css'
const Footer = () => {
  return (
    <div className='footer'>
        <div className='container'>

            <ul className="social-media-icons">
                <li><a href="Facebook.com"><AiFillFacebook /></a></li>
                <li><a href="twitter.com"><AiFillTwitterCircle /></a></li>
                <li><a href="instagram"><AiFillInstagram /></a></li>
            </ul>
            <div className='Account'>
                <h3>My Account</h3>
                <ul>
                    <li>Account</li>
                    <li>Order</li>
                    <li>Cart</li>
                    <li>Shipping</li>
                    <li>return</li>
                </ul>

            </div>
            <div className='Account'>
                <h3>Pages</h3>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Terms & Conditions</li>

                </ul>

            </div>
        </div>
    
    </div>
  );
}

export default Footer;