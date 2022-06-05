import React from 'react'
import { Route, Routes } from 'react-router-dom'
import About from './About'
import ContractUs from './ContractUs'
import Footer from './Footer'
import Home from './Home'
import Navbar from './Navbar'
import Products from './Products'
import ProductsView from './productsView'
const App = () => {

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutUs" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contractUS" element={<ContractUs />} />
        <Route path='/productview' element={<ProductsView />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App