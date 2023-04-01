import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import RecordList from "./pages/RecordList";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Favourites from "./pages/Favourites";
import PageContent from "./pages/PageContent";
import Cart from "./pages/Cart";
import datalar from "./API";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import ForgotPassword from "./pages/ForgotPassword";
import { AuthContextProvider, AuthGoogleProvider } from "./context/AuthContext";
import Account from "./pages/Account";

function App ()  {
  
  return (
    <div className="App">
      <AuthContextProvider>
      <Navbar />
      
      <Routes>
        <Route path="/" element={<PageContent />} />
        <Route path="/recordlist" element={<RecordList />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/favourites" element={<Favourites />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/sign-up" element={<SignUp/>} />
        <Route path="/sign-in" element={<SignIn/>} />
        <Route path="/forgot-password" element={<ForgotPassword/>} />
        <Route path="/account" element={<Account/>} />
      </Routes>
      </AuthContextProvider>
   
      <Footer />
    </div>
  );
}

export default App;

