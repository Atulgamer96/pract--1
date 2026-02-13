import React from "react";

const AnnouncementTab = () => {
  return (
    <>
      <section className="announcements">
        <div className="paddings innerWidth flexCenter announce-container">
          <div className="announceCard">
            <img
              src="./images/announcement_tab_images/grand_finale.png"
              alt=""
            />
            <h3>Grand Finale</h3>
            <span>15 October 2025</span>
            {/* <span>It's coming</span> */}
          </div>
          <div className="announceCard">
            <img src="./images/announcement_tab_images/venue.png" alt="" />
            <h3>Venue</h3>
            <span>SISTec-R, Ratibad, Bhopal 462044</span>
          </div>
        </div>
      </section>
    </>
  );
};

export default AnnouncementTab;
