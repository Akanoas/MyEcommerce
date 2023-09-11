import Nav from './Components/Nav'
import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Login from './Pages/Login'
function App() {

  return (
    <>
    <Nav />
    <Routes>
      <Route path='/login' element={<Login/>} />



    </Routes>

      
    </>
  )
}

export default App
