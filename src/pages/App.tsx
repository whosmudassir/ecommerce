import "../../src/App.css";
import NavBar from "../components/NavBar/index";
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
import NotFound from "./NotFound";
import Loading from "../components/common/Loading";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Loading />
        <Routes>
          <Route path="*" element={<NotFound />} />
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<ProductList />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/wish-list" element={<WishList />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/order-confirmation" element={<OrderConfirmation />} />
          <Route path="/user" element={<User />} />
          <Route path="/shop/:shopitem" element={<ProductDetail />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
