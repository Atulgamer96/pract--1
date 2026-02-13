import React from "react";
import EventSchedule2k24 from "../components/explore_sih_components/EventSchedule2k24";
import SIH2k24Guests from "../components/explore_sih_components/SIH2k24Guests";
import SIH2k24Outcomes from "../components/explore_sih_components/SIH2k24Outcomes";
import SIH_2024GlimpseGallery from "../components/explore_sih_components/SIH_2024GlimpseGallery";
import SIH_2024TopBanner from "../components/explore_sih_components/SIH_2024TopBanner";
import SIH_2024Winners from "../components/explore_sih_components/SIH_2024Winners";
import SIH_2024_Prizes from "../components/explore_sih_components/SIH_2024_Prizes";
import { ThemeSlider2k24 } from "../components/home_components/ThemeSlider";
import Footer from "../components/other/Footer";
import Navbar from "../components/other/Navbar";
import "../stylesheets/HomePageStyle.css";
import SIH_2024_Summary from "../components/explore_sih_components/SIH_2024_Summary";

const SIH2024Page = () => {
  return (
    <>
      <Navbar />
      <SIH_2024TopBanner />
      <ThemeSlider2k24 />
      <SIH_2024Winners />
      <SIH_2024_Prizes />
      <SIH2k24Outcomes />
      <EventSchedule2k24 />
      <SIH_2024GlimpseGallery />
      <SIH2k24Guests />
      <SIH_2024_Summary />
      <Footer />
    </>
  );
};

export default SIH2024Page;
