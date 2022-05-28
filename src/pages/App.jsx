import "../../src/App.css";
import NavBar from "../components/NavBar/index";
import Slider from "../components/Slider/index";
import ProductList from "./ProductList";
import Home from "./Home";
import Cart from "./Cart";
import User from "./User";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product-list" element={<ProductList />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/user" element={<User />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;