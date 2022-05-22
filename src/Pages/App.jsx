import "../../src/App.css";
import NavBar from "../components/NavBar/index";
import Slider from "../components/Slider/index";
import ProductList from "./ProductList";

function App() {
  return (
    <div className="App">
      <NavBar />
      <div class="body-wrapper">
        <Slider />
        <ProductList />
      </div>
    </div>
  );
}

export default App;
