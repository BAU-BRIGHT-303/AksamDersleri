import "./App.css";
import { Route, Routes } from "react-router-dom";
import KitapListesi from "./components/KitapListesi";
import Favoriler from "./components/Favoriler";
import KitapDetay from "./components/KitapDetay";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<KitapListesi />} />
        <Route path="/kitap/:id" element={<KitapDetay />} />
        <Route path="/favoriler" element={<Favoriler />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
