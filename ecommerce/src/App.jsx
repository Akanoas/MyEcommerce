import Nav from './Components/Nav'
import { useState } from 'react'
import {Routes, Route} from 'react-router-dom'
import Login from './Pages/Login'
import Home from './Pages/Home'
import Product from './Pages/Product'
import Contact from './Pages/Contact'
import About from './Pages/About'
import ProductDetail from './Components/ProductDetail'
import Carts from "./Components/Carts";
import ProductList from './Components/ProductList'
function App() {
  const [cart, setCart] = useState([]);
  console.log(cart);

 

  return (
    <>
    <Nav cart={cart} setCart={setCart} />
    <Routes>
      <Route path='/login' element={<Login/>} />
      <Route path='/' element={<Home cart={cart} setCart={setCart} />} />
      <Route path='/product' element={<Product cart={cart} setCart={setCart}/>} />
      <Route path='/productList' element={<ProductList cart={cart} setCart={setCart}/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/contact' element={<Contact/>} />
      <Route path='/products/:id' element={<ProductDetail/>} />
      <Route path='/cart' element={<Carts cart={cart} />} />
    </Routes>


    </>
  )
}

export default App
