import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Urunler from "./components/Urunler";
import { Route, Routes } from "react-router-dom";
import Favoriler from "./components/Favoriler";
import Sepet from "./components/Sepet";
import UrunDetay from "./components/UrunDetay";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Urunler />} />
        <Route path="/favoriler" element={<Favoriler />} />
        <Route path="/sepet" element={<Sepet />} />
        <Route path="/detay/:id" element={<UrunDetay />} />
      </Routes>
    </div>
  );
}

export default App;
