import logo from "./logo.svg";
import "./App.css";

import Navbar from "./components/Navbar";

import Sepet from "./components/Sepet";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import MotorListesi from "./components/MotorListesi";
import MotorDetay from "./components/MotorDetay";
import Motosikletler from "./components/Motosikletler";
import HyperNaked from "./components/HyperNaked";
import Scooters from "./components/Scooters";
import Body from "./components/Body";

function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/" element={<Body />} />
        <Route path="/motosikletler" element={<Motosikletler />} />
        <Route path="/motosikletlistesi/:id" element={<MotorListesi />} />
        <Route path="/hypernaked" element={<HyperNaked />} />
        <Route path="/scooters" element={<Scooters />} />
        <Route path="/motordetay/:id" element={<MotorDetay />} />
        <Route path="/sepet" element={<Sepet />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
