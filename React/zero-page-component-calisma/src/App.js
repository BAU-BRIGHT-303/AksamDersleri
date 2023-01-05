import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Slider from "./components/Slider";
import Footer from "./components/Footer";
import About from "./components/About";
import Projects from "./components/Projects";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Slider />
      <About />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
