import { Route, Router, Routes } from "react-router-dom";
import "./App.css";
import Araclar from "./components/Araclar";
import Elektronik from "./components/Elektronik";
import Emlak from "./components/Emlak";
import Favoriler from "./components/Favoriler";
import Footer from "./components/Footer";
import Headher from "./components/Header";
import Navbar from "./components/Navbar";
import Vitrin from "./components/Vitrin";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Headher />
      <Routes>
        <Route path="/" element={<Vitrin />} />
        <Route path="/favoriler" element={<Favoriler />} />
        <Route path="/emlak" element={<Emlak />} />
        <Route path="/araclar" element={<Araclar />} />
        <Route path="/elektronik" element={<Elektronik />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
