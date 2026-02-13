import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const developerDataAPI = [
  {
    id: 1,
    photo: "./images/developer_photos/shiv.jpg",
    name: "Shivnandan Verma",
    bio: "Frontend Developer",
    phone: "+91 8962738918",
    linkedInProfile: "https://www.linkedin.com/in/shivnandan-verma-927307243/",
    githubProfile: "https://github.com/Shivnadan-verma",
    instagramProfile: "/",
    gmailProfile: "mailto:shivnandanverma918@gmail.com",
  },
  {
    id: 2,
    photo: "./images/developer_photos/tulsiram.jpg",
    name: "Tulsiram Pathe",
    bio: "Full Stack Developer",
    phone: "+91 7692057868",
    linkedInProfile: "https://www.linkedin.com/in/tulsiram-pathe-03b7b9258/",
    githubProfile: "https://github.com/tulsirampathe",
    instagramProfile: "https://www.instagram.com/tulsiram_pathe_/",
    gmailProfile: "mailto:tulsirampathe81@gmail.com",
  },
  {
    id: 3,
    photo: "./images/developer_photos/harsh.jpg",
    name: "Harsh Kamde",
    bio: "Backend Developer",
    phone: "+91 8085619973",
    linkedInProfile: "https://www.linkedin.com/in/harsh-kamde",
    githubProfile: "https://github.com/harsh-kamde",
    instagramProfile: "/",
    gmailProfile: "mailto:harshkamde4321@gmail.com",
  },
  
  // {
  //   id: 3,
  //   photo: "./images/developer_photos/gkd.jpg",
  //   name: "Gaurav Dixit",
  //   bio: "Individual Developer",
  //   phone: "+91 74711 85169",
  //   linkedInProfile: "http://www.linkedin.com/in/gaurav-kumar-dixit-a8887a28b",
  //   githubProfile: "https://github.com/dixitgauravkumar69",
  //   instagramProfile: "https://www.instagram.com/",
  //   gmailProfile: "mailto:dixitgauravkumar69@gmail.com",
  // },
];

const DeveloperCards = () => {
  const [data] = useState(developerDataAPI);

  return (
    <>
      <section className="developer patron-card">
        <div className="committee-top">
          <img
            src="./images/developer_photos/developers.png"
            alt="Developers"
          />
          <h2>DEVELOPERS</h2>
          <span>Here are Developers of SIH</span>
          <span className="bottom-bar"></span>
        </div>
        <div className="developer-card">
          {data.map((element) => {
            return (
              <div className="card" key={element.id}>
                <div className="img-box">
                  <img src={element.photo} alt="SIH Developer" />
                </div>

                <div className="content">
                  <div className="details">
                    <h2>
                      {element.name}
                      <br />
                      <span>{element.bio}</span>
                      <br />
                    </h2>

                    <div className="phone">
                      <span>{element.phone}</span>
                    </div>

                    <div className="social-btn">
                      <NavLink
                        to={element.linkedInProfile}
                        style={{ background: "#0a63bc" }}
                        target="_blank"
                      >
                        <i className="bx bxl-linkedin"></i>
                      </NavLink>

                      <NavLink
                        to={element.githubProfile}
                        style={{ background: "#212121" }}
                        target="_blank"
                      >
                        <i className="bx bxl-github"></i>
                      </NavLink>
                      <NavLink
                        to={element.instagramProfile}
                        style={{ background: "#db1c8a" }}
                        target="_blank"
                      >
                        <i className="bx bxl-instagram"></i>
                      </NavLink>
                      <NavLink
                        to={element.gmailProfile}
                        style={{ background: "#c74039" }}
                        target="_blank"
                      >
                        <i className="bx bxl-gmail"></i>
                      </NavLink>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default DeveloperCards;
