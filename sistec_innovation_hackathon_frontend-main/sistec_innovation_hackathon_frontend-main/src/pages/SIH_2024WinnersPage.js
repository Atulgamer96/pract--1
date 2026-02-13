import React from "react";
import Footer from "../components/other/Footer";
import Navbar from "../components/other/Navbar";
import SIH2k24WinnersList from "../components/result_components/SIH2k24WinnersList";
import "../stylesheets/ResultPageStyle.css";
import SIH_2024Winners from "../components/explore_sih_components/SIH_2024Winners";

const SIH_2024WinnersPage = () => {
  return (
    <>
      <Navbar />
      <div className="margin-top-max"></div>
      <SIH_2024Winners />
      <SIH2k24WinnersList />
      <Footer />
    </>
  );
};

export default SIH_2024WinnersPage;
