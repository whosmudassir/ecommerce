import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div class="nav-bar-wrapper">
          <button class="hamburger-icon">
            {" "}
            <i class="fa fa-bars icon" id="render-icon"></i>
          </button>
          <div class="left-content">
            <a href="/index.html">
              {" "}
              <p class="heading-medium">Name</p>{" "}
            </a>
          </div>
          <div class="right-content">
            <button class="icon-wrapper">
              <i class="fa fa-moon icon"></i>
            </button>
            <button class="icon-wrapper">
              <i class="fa fa-github icon"></i>
            </button>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
