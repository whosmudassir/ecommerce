import "../../src/App.css";
import NavBar from "../components/NavBar/index";
import Slider from "../components/Slider/index";
import ProductList from "./ProductList";
import Home from "./Home";
import Cart from "./Cart";
import User from "./User";

function App() {
  return (
    <div className="App">
      <NavBar />
      <ProductList />
    </div>
  );
}

export default App;
