import React from "react";
import "../stylesheets/ResultPageStyle.css";
import Navbar from "../components/other/Navbar";
import Footer from "../components/other/Footer";
// import Lottie from "lottie-react";
// import ComingSoonResult from "../animations/coming_soon.json";
import SIH_2024GrandFinaleTeams from "../components/result_components/SIH_2024GrandFinaleTeams";

const ComingSoonResultPage = () => {
  return (
    <>
      <Navbar />
    
      {/* <section className="coming-soon">
        <Lottie
          loop={true}
          animationData={ComingSoonResult}
          className="lottie-animation"
        />
      </section> */}
      
  <SIH_2024GrandFinaleTeams />
      {/* UnComment the above line for the current year finale results or comment above line for animation */}
      <Footer />
    </>
  );
};

export default ComingSoonResultPage;
