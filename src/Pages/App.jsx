import "../../src/App.css";
import NavBar from "../components/NavBar/index";
import Slider from "../components/Slider/index";
import ProductList from "./ProductList";
import { BrowserRouter } from "react-router-dom";
import Home from "./Home";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <ProductList />
      </BrowserRouter>
    </div>
  );
}

export default App;
