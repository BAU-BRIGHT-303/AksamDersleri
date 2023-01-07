import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Slider from "./pages/Slider";
import Games from "./pages/Games";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import GamesAbout from "./pages/GamesAbout";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Slider />} />
        <Route path="/oyunlar" element={<Games />} />
        <Route path="/ekip" element={<GamesAbout />} />
        <Route path="/iletisim" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
