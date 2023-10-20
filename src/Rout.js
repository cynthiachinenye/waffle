import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import Product from './Product'
const Rout = ({product, setProduct,detail, view, close, setClose}) => {
  return (
    <div>
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path='/product' element={<Product product={product} setProduct={setProduct} detail={detail} view={view} close={close} setClose={setClose}/>}/>
      </Routes>
    </div>
  )
}

export default Rout
