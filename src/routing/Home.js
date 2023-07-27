import React from 'react'
import Header from './Header'
import Form from './Form'
import About from './About'
import App from './App'
import  "./home.css"
// import Header from './Header'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Cart from './Cart'
function Home() {
  return (
    <>

      <BrowserRouter>
        <Header />
        <Routes>
               
          <Route path='/' element={<App />}></Route>
          <Route path='/cart' element={<Cart />}></Route>
          {/* <Route path='/app' element={<App />}></Route> */}
          <Route path='/form' element={<Form />}></Route>
          <Route path='/about' element={<About />}></Route>
        </Routes>
      </BrowserRouter>

    </>)
}

export default Home
