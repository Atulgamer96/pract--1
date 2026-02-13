import React from "react";
import "react-vertical-timeline-component/style.min.css";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

const SIH2k24OutcomesAPI = [ 
  {
    id: 1,
    icon: "fa-solid fa-briefcase", // Represents job offers or professional opportunities
    date: "JOB OFFER",
    title: "Job Offer by ITSC Software",
    description:
      "ITSC Software extended job offers to select participants, recognizing their skills and innovative contributions.",
  },
  {
    id: 2,
    icon: "fa-solid fa-user-graduate", // Represents education and internships
    date: "INTERNSHIP",
    title: "Internship offered by DRMZ Tech to 12 Students",
    description:
      "DRMZ Tech offered internships to 12 students, enhancing their technical skills through hands-on experience.",
  },
  {
    id: 3,
    icon: "fa-solid fa-lightbulb", // Represents innovation and incubation
    date: "INCUBATION SEAT",
    title: "Incubation seat was offered to the Winner Team at B Nest Incubation Centre",
    description:
      "The winner team secured an incubation seat at B Nest Incubation Centre, Smart City office Bhopal, during both sessions, empowering their innovative journey.",
  },
  {
    id: 4,
    icon: "fa-solid fa-mobile-alt", // Represents mobile apps and development
    date: "MOBILE APP",
    title: "A patient management and video conference APP",
    description:
      "A patient management and video conference app was developed, enhancing healthcare accessibility and communication.",
  },
  {
    id: 5,
    icon: "fa-solid fa-laptop-code",
    date: "WEB APP",
    title: "Maintaining Police Station Wise Data",
    description:
      "A web app was created to organize and manage data efficiently, streamlining information for police stations.",
  },
  {
    id: 6,
    icon: "fa-solid fa-brain",
    date: "ML MODAL",
    title: "Crop Identification using Machine Learning Model",
    description:
      "Using machine learning, a web app was designed for crop identification, aiding farmers in precision agriculture and crop management.",
  },
];


const SIH2k24Outcomes = () => {
  return (
    <>
      <section className="container">
        <h3 className="main-heading-center">Outcomes of SIH 2024</h3>
        <div className="event-timeline">
          <VerticalTimeline lineColor="var(--text-black-700)">
            {SIH2k24OutcomesAPI.map((item) => {
              return (
                <VerticalTimelineElement
                  iconStyle={{
                    background: "var(--skin-color)",
                    color: "white",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    fontSize: "1.5rem",
                  }}
                  icon={<i className={item.icon}></i>}
                  date={item.date}
                >
                  <h3 className="timeline-heading">{item.title}</h3>
                  <p className="timeline-description">{item.description}</p>
                </VerticalTimelineElement>
              );
            })}
          </VerticalTimeline>
        </div>
      </section>
    </>
  );
};

export default SIH2k24Outcomes;
