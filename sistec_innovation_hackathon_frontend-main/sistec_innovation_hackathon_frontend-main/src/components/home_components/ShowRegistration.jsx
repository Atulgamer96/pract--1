import React from "react";
import "../../stylesheets/ShowRegistration.css";
import { NavLink } from "react-router-dom";

const ShowRegistration = () => {
  return (
    <section className="registration-container">
      {/* Section Header */}
      <div className="registration-header">
        <h2>REGISTRATION HIGHLIGHTS</h2>
        <span className="header-subtitle">Your Success, Your Opportunity!</span>
      </div>

      {/* Highlight Cards */}
      <div className="registration-cards">
        {/* Team Size - Smaller card */}
        <div className="registration-card highlight-card team-card">
          <img
            src="./images/show_registration_images/team.jpg"
            alt="Team Size"
            className="card-img team-img"
          />
          <h3>TEAM SIZE</h3>
          <div className="card-amount">5 Members</div>
          <p>per Team</p>
        </div>

        {/* Registration Fee - Main highlight */}
        <div className="registration-card highlight-card main-highlight">
          <h3>REGISTRATION FEE</h3>
          <div className="card-amount">
            <div className="fee-option">
              <span className="fee-type">Non-CSI/IEEE Members:</span>
              <div className="fee-price">
                <span className="old-fee">₹3000</span> →
                <span className="new-fee">₹2500</span>
              </div>
            </div>
            <div className="fee-option">
              <span className="fee-type">CSI/IEEE Members:</span>
              <div className="fee-price">
                <span className="new-fee">₹2000</span>
              </div>
            </div>
          </div>
          <p className="special-offer">Special CSI/IEEE Member Discount!</p>

          <NavLink to="/register" className="my-btn-reg">
            Register Now
          </NavLink>
        </div>

        {/* Food Provided - Smaller card */}
        <div className="registration-card highlight-card food-card">
          <img
            src="./images/show_registration_images/food.png"
            alt="Food Facility"
            className="card-img food-img"
          />
          <h3>FOOD PROVIDED</h3>
          <div className="card-amount">5 Times</div>
          <p>Included in Fee</p>
        </div>
      </div>

      {/* Important Note */}
      <div className="important-note">
        ⚡ Team must have at least one CSI/IEEE Member to avail CSI/IEEE concession.
      </div>
    </section>
  );
};

export default ShowRegistration;
