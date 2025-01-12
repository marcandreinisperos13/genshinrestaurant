import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './PAGES/Home';
import About from './PAGES/About';
import Product from './PAGES/Product';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/genshinrestaurant' element={<Home />}></Route>
        <Route path='/genshinrestaurant/about' element={<About />}></Route>
        <Route path='/genshinrestaurant/product' element={<Product />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App