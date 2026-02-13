import React from "react";
import "../stylesheets/ResultPageStyle.css";
import Navbar from "../components/other/Navbar";
import Footer from "../components/other/Footer";
import SIH_2024GrandFinaleTeams from "../components/result_components/SIH_2024GrandFinaleTeams";

const SIH_2024GrandFinalePage = () => {
  return (
    <>
      <Navbar />
      <SIH_2024GrandFinaleTeams />
      <Footer />
    </>
  );
};

export default SIH_2024GrandFinalePage;
