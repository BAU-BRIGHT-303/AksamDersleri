import logo from "./logo.svg";
import "./App.css";

import Navbar from "./components/Navbar";
import Slider from "./components/Slider";
import Anasayfa from "./components/Anasayfa";
import Footer from "./components/Footer";
function App() {
  return (
    <div>
      <Navbar />
      <Slider />
      <Anasayfa />
      <Footer />
    </div>
  );
}

export default App;
