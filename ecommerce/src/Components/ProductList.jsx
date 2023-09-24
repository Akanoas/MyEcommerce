import { useState, useEffect } from 'react';
import './ProductList.css'
import {AiOutlineShoppingCart} from 'react-icons/ai'
import {AiOutlineEye} from 'react-icons/ai'
import {AiOutlineHeart} from 'react-icons/ai'
const ProductList = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
        .then((response) => response.json())
        .then((data) => setProducts(data));
    }, []);

    function addToCart(product) {
        const cartItem = {
        ...product,
        quantity: 1
        }
        setCart([...cart, cartItem]);
    }

  return (
    <div className='Products'>
      <h2>Top Products</h2>
        <ul>
          {products.map((product) => (
              <li className="product-list" key={product.id}>
                <div className='product-card'>
                    <div>
                      <img src={product.image} alt={product.title} className='product-image'/>
                    </div>
                    <div className='product-icon'>
                      <AiOutlineShoppingCart />
                      <AiOutlineEye />
                      <AiOutlineHeart />
                    </div>
                    <div className='product-details'>
                      <h3 >{product.title}</h3>
                      <h4 className='product-price'>Price: ${product.price}</h4>
                      <p className='product-description'> {product.description}</p>
                      <p>Rating: {product.rating.rate}</p>
                    </div>
                    <button onClick={() => addToCart(product)} className='add-to-cart-button'>Add to Cart</button>
                </div>
              </li>
          ))}
        </ul>
      
    </div>
  );
};

export default ProductList;