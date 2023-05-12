import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="head">
        {" "}
        <h1>Hello World</h1>
      </div>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
