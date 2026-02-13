import Lottie from "lottie-react";
import React from "react";
import ComingSoonResult from "../animations/coming_soon.json";
import "../stylesheets/ResultPageStyle.css";


const ComingSoonPage = () => {
  return (
    <>
    
      <section className="coming-soon">
        <Lottie
          loop={true}
          animationData={ComingSoonResult}
          className="lottie-animation"
        />
      </section>
    </>
  );
};

export default ComingSoonPage;