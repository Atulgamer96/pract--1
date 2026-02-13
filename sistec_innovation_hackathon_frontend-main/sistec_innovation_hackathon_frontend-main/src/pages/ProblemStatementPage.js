import React from "react";
import Navbar from "../components/other/Navbar";
import Footer from "../components/other/Footer";
import ProblemStatements from "../components/PS_components/ProblemStatements";
import ComingSoonPage from "./ComingSoonPage";

const ProblemStatementsPage = () => {
  return (
    <>
      <Navbar />
      <ProblemStatements />

      {/* <ComingSoonPage /> */}
      <Footer />
    </>
  );
};

export default ProblemStatementsPage;
