import React, { useState }  from "react";
import Nav from "./Nav";
import { BrowserRouter } from "react-router-dom";
import Rout from "./Rout";
import Footer from "./components/Footer";
import ProductDetail from "./components/ProductDetail";
import './index.css'


function App() {
  //add to cart
  const [cart,setCart] = useState([])
  //product detail
  const [close, setClose] = useState(false)
  const [detail, setDetail] = useState([])
  //filter product
  const [product, setProduct] = useState(ProductDetail)
  const searchbtn = (product) => {
    const change = ProductDetail.filter((s)=>{

      return s.Cat === product
    })
    setProduct(change)

  }
  const view = (product) => {
    setDetail([{...product}])
    setClose(true)

  }
  //add to cart
  
  const addToCart = (product) => {
    
    const exist = cart.find((x) => {
      return x.id === product.id
    })
       if(exist)
       {
        alert('This Product is already added to cart')
       }
       else{
        setCart([...cart,{...product, qty:1}])
        alert(" Product is added to cart")
       }
  }
  return (
    <div className="App">
     <BrowserRouter>
     <Nav searchbtn={searchbtn}/>
     <Rout product={product} setProduct={setProduct} detail={detail} view={view} close={close} setClose={setClose} cart={cart} setCart={setCart} addToCart={addToCart} />
     <Footer/>
     </BrowserRouter>
    </div>
  );
}

export default App;
