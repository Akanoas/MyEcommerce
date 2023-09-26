import Nav from './Components/Nav'
import {Routes, Route} from 'react-router-dom'
import Login from './Pages/Login'
import Home from './Pages/Home'
import Product from './Pages/Product'
import Contact from './Pages/Contact'
import About from './Pages/About'
import ProductDetail from './Components/ProductDetail'

function App() {

  return (
    <>
    <Nav />
    <Routes>
      <Route path='/login' element={<Login/>} />
      <Route path='/' element={<Home />} />
      <Route path='/product' element={<Product />} />
      <Route path='/about' element={<About/>} />
      <Route path='/contact' element={<Contact/>} />
      <Route path='/product/:id' element={<ProductDetail/>} />
      




    </Routes>

      
    </>
  )
}

export default App
