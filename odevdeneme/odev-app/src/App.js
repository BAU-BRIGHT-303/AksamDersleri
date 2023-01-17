import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import RecordList from "./pages/RecordList";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Favourites from "./pages/Favourites";
import PageContent from "./pages/PageContent";
import datalar from "./API";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<PageContent />} />
        <Route path="/recordlist" element={<RecordList />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/favourites" element={<Favourites />} />
      </Routes>
   
      <Footer />
    </div>
  );
}

export default App;

