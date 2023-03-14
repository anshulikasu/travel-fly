import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import Traveltips from "./components/Traveltips/Traveltips";
import Aboutus from "./components/About/Aboutus";
import Banner from "./components/Banner/Banner";
import CardList from "./components/Cardlist/Cardlist";
import Tcardlist from "./components/Tcardlist/Tcardlist";
import Layout from "./components/Layout/Layout";
import Contactus from "./components/Contact/Contactus";
import Packages from "./components/Packages/Packages";
import Refundpolicy from "./components/Refundpolicy/Refundpolicy";
import TandC from "./components/TermsAndConditions/TandC";
import SearchForm from "./components/Searchform/SearchForm";

function App() {
  return (
    <div className="app">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/packages" element={<Packages />} />
          <Route path="/contactus" element={<Contactus />} />
          <Route path="/aboutus" element={<Aboutus />} />
          <Route path="/refundpolicy" element={<Refundpolicy />} />
          <Route path="/tandc" element={<TandC />} />
          
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
