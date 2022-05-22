import "../../src/App.css";
import NavBar from "../components/NavBar/index";
import Slider from "../components/Slider/index";
import Card from "../components/Card";

function App() {
  return (
    <div className="App">
      <NavBar />
      <div class="body-wrapper">
        <Slider />
        <Card />
      </div>
    </div>
  );
}

export default App;
