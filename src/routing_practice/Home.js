import React, { useState } from 'react'
import { createContext } from 'react'
import Header from './Header'
import Contact from './Contact'
import Top10 from './Top10'
import "./practice.css"



 

import { BrowserRouter, Routes, Route } from 'react-router-dom'
function Home() {
  
  return (
    <>
    
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path='/'></Route>
            <Route path='/top10' element={<Top10 />}></Route>
            <Route path='/contact' element={<Contact />}></Route>
          </Routes>
        </BrowserRouter>
    
    </>
  )
}

export default Home
