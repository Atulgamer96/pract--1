import React from "react";
import "../stylesheets/ResultPageStyle.css";
import Navbar from "../components/other/Navbar";
import Footer from "../components/other/Footer";
import SIH_2023GrandFinaleTeams from "../components/result_components/SIH_2023GrandFinaleTeams";

const SIH_2023GrandFinalePage = () => {
  return (
    <>
      <Navbar />
      <SIH_2023GrandFinaleTeams />
      <Footer />
    </>
  );
};

export default SIH_2023GrandFinalePage;
