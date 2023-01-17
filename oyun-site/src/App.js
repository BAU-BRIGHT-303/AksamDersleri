import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Slider from "./components/Slider";
import Anasayfa from "./components/Anasayfa";
import Favoriler from "./components/Favoriler";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Slider />
      <Routes>
        <Route path="/" element={<Anasayfa />} />
        <Route path="/favoriler" element={<Favoriler />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
