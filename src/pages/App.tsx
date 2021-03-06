import "../../src/App.css";
import NavBar from "../components/NavBar/index";
import Slider from "../components/Slider/index";
import Footer from "../components/Footer/index";
import ProductList from "./ProductList";
import Home from "./Home";
import Cart from "./Cart";
import User from "./User";
import Checkout from "./Checkout";
import OrderConfirmation from "./OrderConfirmation";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import WishList from "./WishList";
import ProductDetail from "./ProductDetail";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<ProductList />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/wish-list" element={<WishList />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/order-confirmation" element={<OrderConfirmation />} />
          <Route path="/user" element={<User />} />
          <Route path="/shop/:shopitem" element={<ProductDetail />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
