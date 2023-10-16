import Nav from "./Nav";
import { BrowserRouter } from "react-router-dom";
import Rout from "./Rout";



function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Nav/>
     <Rout/>
     </BrowserRouter>
    </div>
  );
}

export default App;
