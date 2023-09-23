import Nav from './Components/Nav'
import {Routes, Route} from 'react-router-dom'
import Login from './Pages/Login'
import Home from './Pages/Home'
import Product from './Components/Product'
function App() {

  return (
    <>
    <Nav />
    <Routes>
      <Route path='/login' element={<Login/>} />
      <Route path='/' element={<Home />} />
      <Route path='/product' element={<Product />} />




    </Routes>

      
    </>
  )
}

export default App
