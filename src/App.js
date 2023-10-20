import React, { useState }  from "react";
import Nav from "./Nav";
import { BrowserRouter } from "react-router-dom";
import Rout from "./Rout";
import Footer from "./components/Footer";
import ProductDetail from "./components/ProductDetail";



function App() {
  //product detail
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

  }
  return (
    <div className="App">
     <BrowserRouter>
     <Nav searchbtn={searchbtn}/>
     <Rout product={product} setProduct={setProduct} detail={detail} view={view}/>
     <Footer/>
     </BrowserRouter>
    </div>
  );
}

export default App;
