import React from "react";
import Navbar from "../Navbar/Navbar";
import Banner from "../Banner/Banner";
import CardList from "../Cardlist/Cardlist";
import Tcardlist from "../Tcardlist/Tcardlist";
import Traveltips from "../Traveltips/Traveltips";
import Footer from "../Footer/Footer";
import SearchForm from "../Searchform/SearchForm";

function Home() {
  return (
    <div className="Home_screen">
      {/* <Navbar /> */}
      <Banner />
      <CardList />
      <Tcardlist />
      <Traveltips />
      <SearchForm />
      {/* <Footer /> */}
    </div>
  );
}

export default Home;
