import { useState } from 'react'
import './App.css'
import Navbar from './Component/Navbar'
import Home from './Component/Home'
import About from './Component/About'
import Contact from './Component/Contact'
import Product from './Component/Product'
import { Route , Routes } from 'react-router-dom'

function App() {
  return(
    <>
      <Navbar/>
        <Routes>
          <Route path = "/" element = {<Home/>} />
          <Route path = "/products" element = {<Product/>} />
          <Route path = "/about" element = {<About/>} />
          <Route path = "/contact" element = {<Contact/>} />
        </Routes>
    </>
  )
}

export default App
