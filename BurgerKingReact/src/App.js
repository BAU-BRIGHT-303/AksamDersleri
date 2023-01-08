import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Headher from "./components/Headher";
import Menu from "./components/Menu";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Headher />
      <Menu />
    </div>
  );
}

export default App;
