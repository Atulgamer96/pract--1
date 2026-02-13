import React from "react";
import "../stylesheets/ResultPageStyle.css";
import Navbar from "../components/other/Navbar";
import Footer from "../components/other/Footer";
import SIH2k23WinnersList from "../components/result_components/SIH2k23WinnersList";
import SIH_2023Winners from "../components/explore_sih_components/SIH_2023Winners";

const SIH_2023WinnersPage = () => {
  return (
    <>
      <Navbar />
      <div className="margin-top-max"></div>
      <SIH_2023Winners />
      <SIH2k23WinnersList />
      <Footer />
    </>
  );
};

export default SIH_2023WinnersPage;
