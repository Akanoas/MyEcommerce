import { useState, useEffect } from 'react';

export default function Product({cart, setCart}) {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [priceRange, setPriceRange] = useState(0);
  const [sortBy, setSortBy] = useState('price');
  useEffect(() => {
    // fetch('https://fakestoreapi.com/products')
    //   .then(res=>res.json())
    //   .then(json=>console.log(json))
    const fetchProducts = async () => {
      const response = await fetch('https://fakestoreapi.com/products');
      const products = await response.json();
      const categories = products.map(product => product.category);
      const uniqueCategories = [...new Set(categories)];
      setCategories(uniqueCategories);
      setProducts(products);
    }

    fetchProducts();
  }, [])

  function addToCart(product) {
    const cartItem = {
      ...product,
      quantity: 1
    }
    setCart([...cart, cartItem]);
  }

  function selectCategory(e) {
    setSelectedCategory(e.target.value);
  }

  function selectSortBy(e) {
    setSortBy(e.target.value);
  }

  function sortByPrice(ascending) {
    filteredProducts.sort((a, b) => {
      if (!ascending) {
        return b.price - a.price
      }
      return a.price - b.price
    })
  }

  let filteredProducts = products;
  if (selectedCategory !== 'all') {
    filteredProducts = products.filter(product => product.category === selectedCategory);
  }
  filteredProducts = filteredProducts.filter(product => product.price <= priceRange);
  console.log(products);
  console.log(sortBy);
  if(sortBy === 'price') {
    sortByPrice();
  } else if (sortBy === 'rating') {
    filteredProducts.sort((a, b) => b.rating.rate - a.rating.rate);
  }
  return (
    <div>
      <h1>Products</h1>
      <select onChange={selectCategory}>
        <option value="all">All</option>
        {categories.map(category => (
          <option value={category} key={category}>{category}</option>
        ))}
      </select>
      <input type="range" min="0" max="300" value={priceRange} onChange={(e) => setPriceRange(e.target.value)}/>
      <h3>Sort By</h3>
      <select value={sortBy} onChange={selectSortBy}>
        <option value="price">Price</option>
        <option value="rating">Rating</option>
      </select>
      <ul>
        {filteredProducts.map(product => (
          <li className="product" key={product.id}>
            <h3>{product.title}</h3>
            <p>{product.description}</p>
            <img src={product.image} alt={product.title} />
            <p>Price: ${product.price}</p>
            <p>Rating: {product.rating.rate}</p>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </li>
        ))}
      </ul>
    </div>
  )
}
