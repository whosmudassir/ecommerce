import "../../src/App.css";
import NavBar from "./NavBar/index";
import Slider from "./Slider/index";

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
