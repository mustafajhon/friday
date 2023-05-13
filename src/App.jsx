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

      <p style={{ color: "red" }} className="paragraph">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Id
      </p>

      <div className="margin">
        <div className="padding">padding One</div>
        <div className="padding">padding One</div>
      </div>

      <div className="gird">
        <div className="one">One</div>
        <div className="one two">Two</div>
        <div className="one three">Three</div>
        <div className="one four" id="ff">
          Four
        </div>
        <div className="one five">Five</div>
        <div className="one six">Six</div>
      </div>
    </div>
  );
}

export default App;
