import React from "react";
import Marquee from "react-fast-marquee";

const MarqueePage = ({ text }) => {
  return (
    <div className="marquee-container">
      <Marquee speed={60} gradient={false} pauseOnHover>
        <div className="marquee-text ">
          <img src="images/new.gif" width="100" height="40" alt="new" />
          {/* <h5> 🚀 Hackathon Finalists Announced! Check results section for details!  </h5> */}
          <h5>
            Due to Huge Response – Registration Extended till{" "}
            <b>10th October 2025!</b> Don’t Miss Your Chance
          </h5>

          <img src="images/new.gif" width="100" height="40" alt="new" />

          {/* <span>fgeyfjcsucyhbv</span> */}
        </div>
        <div className="marquee-text text2"></div>
      </Marquee>
    </div>
  );
};

export default MarqueePage;
