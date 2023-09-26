import { useState, useEffect } from 'react';
import {AiOutlineShoppingCart} from 'react-icons/ai'
import {AiOutlineEye} from 'react-icons/ai'
import {AiOutlineHeart} from 'react-icons/ai'
import './Product.css'
function Product() {
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('');
    const [cart, setCart] = useState([]);
    useEffect(() => {
      // Fetching products data from the API
      fetch('https://fakestoreapi.com/products')
        .then((response) => response.json())
        .then((data) => setProducts(data));
  
      // Fetching categories data from the API
      fetch('https://fakestoreapi.com/products/categories')
        .then((response) => response.json())
        .then((data) => setCategories(data));
    }, []);

    function addToCart(product) {
      const cartItem = {
      ...product,
      quantity: 1
      }
      setCart([...cart, cartItem]);
  }
  
    const handleCategoryChange = (event) => {
      setSelectedCategory(event.target.value);
    };
  
    const filteredProducts = selectedCategory
      ? products.filter((product) => product.category === selectedCategory)
      : products;
  
    return (
      <div>
        <h1>Product Listing</h1>
        <select value={selectedCategory} onChange={handleCategoryChange}>
          <option value="">All Categories</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
        <ul>
          {filteredProducts.map((product) => (
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
  }
  
  export default Product;