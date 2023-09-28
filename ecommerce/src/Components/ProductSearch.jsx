import { useState } from 'react';
import { Link } from 'react-router-dom';
import './ProductSearch.css'

const ProductSearch = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [products, setProducts] = useState([]);

  const handleSearch = async (e) => {
    setSearchTerm(e.target.value);
    const response = await fetch('https://fakestoreapi.com/products');
    const data = await response.json();
    const filteredData = data.filter((item) =>
      item.title.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setProducts(filteredData);
  };

  return (
    <div className="search_box">
        <input className= "input_for_search" 
        type="text"
        value={searchTerm}
        onChange={handleSearch}
        placeholder="Enter the product name" 
        autoComplete="off"
        />
        <button 
        className="button_search"
        onClick={handleSearch}>Search</button>
        <ul className="search-results">
            {products.map((product) => (
            <li key={product.id}>
                <Link to={`/products/${product.id}`}>{product.title}</Link>
            </li>
            ))}
        </ul>
    </div>
    
  );
};

export default ProductSearch;