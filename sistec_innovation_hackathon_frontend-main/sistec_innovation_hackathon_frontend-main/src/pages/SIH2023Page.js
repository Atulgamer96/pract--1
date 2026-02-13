import React from "react";
import Navbar from "../components/other/Navbar";
import Footer from "../components/other/Footer";
import "../stylesheets/ExploreSIHPageStyle.css";
import SIH_2023Winners from "../components/explore_sih_components/SIH_2023Winners";
import SIH_2023TopBanner from "../components/explore_sih_components/SIH_2023TopBanner";
import { ThemeSlider2k23 } from "../components/home_components/ThemeSlider";
import SIH_2023GlimpseGallery from "../components/explore_sih_components/SIH_2023GlimpseGallery";
import SIH_2023_Prizes from "../components/explore_sih_components/SIH_2023_Prizes";
import EventSchedule2k23 from "../components/explore_sih_components/EventSchedule2k23";
import SIH2k23Guests from "../components/explore_sih_components/SIH2k23Guests";
import SIH2k23Outcomes from "../components/explore_sih_components/SIH2k23Outcomes";
import SIH_2023_Summary from "../components/explore_sih_components/SIH_2023_Summary";

const SIH2023Page = () => {
  return (
    <>
      <Navbar />
      <SIH_2023TopBanner />
      <ThemeSlider2k23 />
      <SIH_2023Winners />
      <SIH_2023_Prizes />
      <SIH2k23Outcomes />
      <EventSchedule2k23 />
      <SIH_2023GlimpseGallery />
      <SIH2k23Guests />
      <SIH_2023_Summary />
      <Footer />
    </>
  );
};

export default SIH2023Page;
