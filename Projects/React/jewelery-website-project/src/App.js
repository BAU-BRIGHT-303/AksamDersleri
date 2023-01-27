import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Favoriler from "./components/Favoriler";
import Sepet from "./components/Sepet";
import UrunDetay from "./components/UrunDetay";
import Anasayfa from "./components/Anasayfa";
import Bileklikler from "./components/Bileklikler";
import Kupeler from "./components/Kupeler";
import Kolyeler from "./components/Kolyeler";
import Yuzukler from "./components/Yuzukler";
import Magazalar from "./components/Magazalar";
import KayitOl from "./components/KayitOl";
import GirisYap from "./components/GirisYap";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Anasayfa />} />
        <Route path="/favoriler" element={<Favoriler />} />
        <Route path="/sepet" element={<Sepet />} />
        <Route path="/detay/:id" element={<UrunDetay />} />
        <Route path="/bileklikler" element={<Bileklikler />} />
        <Route path="/kupeler" element={<Kupeler />} />
        <Route path="/kolyeler" element={<Kolyeler />} />
        <Route path="/yuzukler" element={<Yuzukler />} />
        <Route path="/magazalar" element={<Magazalar />} />
        <Route path="/kayitol" element={<KayitOl />} />
        <Route path="/girisyap" element={<GirisYap />} />
      </Routes>
    </div>
  );
}

export default App;
