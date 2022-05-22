import "../../src/App.css";
import NavBar from "../components/NavBar/index";
import Slider from "../components/Slider/index";

function App() {
  return (
    <div className="App">
      <NavBar />
      <div class="body-wrapper">
        <Slider />
      </div>
    </div>
  );
}

export default App;
