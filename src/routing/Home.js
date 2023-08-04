import React, { createContext, useState } from 'react'
import Header from './Header'
import Form from './Form'
import About from './About'
import Blog from './Blog'
import Singleblog from './Singleblog'
import App from './App'
import Newblog from './Newblog'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
// import Newblog from './Newblog'
// import Singleblog from './Singleblog'
import  "./home.css"
import Cart from './Cart'
// import Header from './Header'


 export const globel = createContext({})
 
function Home() {
  const [item ,setitem] = useState([])
  return (
    <>
  <globel.Provider value = {{item,setitem}}>
      <BrowserRouter>
      
        <Header />
        
        <Routes>
               
          <Route path='/' element={<App />}></Route>
          
          <Route path='/cart' element={<Cart />}></Route>
          
          <Route path='/form' element={<Form />}></Route>
          <Route path='/about' element={<About />}></Route>
         
          <Route path='/blog'element={< Newblog/>}>
          <Route index element={<Blog/>}></Route>
          <Route path=':id' element={<Singleblog/>}></Route> */}
          </Route> 
          
         <Route path='/data/:id'element={< Singleblog/>}></Route>
        </Routes>
      </BrowserRouter>
      </globel.Provider>
    </>)
}

export default Home
