import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {AiOutlineShoppingCart} from 'react-icons/ai'
import {AiOutlineEye} from 'react-icons/ai'
import {AiOutlineHeart} from 'react-icons/ai'
export default function ProductDetail() {
    const [product, setProduct] = useState(null);
    const { id } = useParams();
  
    useEffect(() => {
      fetch(`https://fakestoreapi.com/products/${id}`)
        .then(res => res.json())
        .then(json => setProduct(json));
    }, [id]);
  
    if (!product) {
      return <div>Loading...</div>;
    }
  
  
    return (
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
    );
  }
  