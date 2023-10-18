import Nav from "./Nav";
import { BrowserRouter } from "react-router-dom";
import Rout from "./Rout";
import Footer from "./components/Footer";



function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Nav/>
     <Rout/>
     <Footer/>
     </BrowserRouter>
    </div>
  );
}

export default App;
