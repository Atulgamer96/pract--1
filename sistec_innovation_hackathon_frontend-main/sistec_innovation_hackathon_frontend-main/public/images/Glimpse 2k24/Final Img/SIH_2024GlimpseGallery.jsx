import React, { useState } from "react";
import { sliderSettings } from "../../utils/common";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";

const galleryImages = [
    {
      id: 1,
      img: "/images/Glimpse 2k24/Final Images/1.jpg",
    },
    {
      id: 2,
      img: "/images/Glimpse 2k24/Final Images/2.jpg",
    },
    {
      id: 3,
      img: "/images/Glimpse 2k24/Final Images/3.jpg",
    },
    {
      id: 4,
      img: "/images/Glimpse 2k24/Final Images/4.jpg",
    },
    {
      id: 5,
      img: "/images/Glimpse 2k24/Final Images/5.jpg",
    },
    {
      id: 6,
      img: "/images/Glimpse 2k24/Final Images/6.jpg",
    },
    {
      id: 7,
      img: "/images/Glimpse 2k24/Final Images/7.jpg",
    },
    {
      id: 8,
      img: "/images/Glimpse 2k24/Final Images/8.jpg",
    },
    {
      id: 9,
      img: "/images/Glimpse 2k24/Final Images/9.jpg",
    },
    {
      id: 10,
      img: "/images/Glimpse 2k24/Final Images/10.jpg",
    },
    {
      id: 11,
      img: "/images/Glimpse 2k24/Final Images/11.jpg",
    },
    {
      id: 12,
      img: "/images/Glimpse 2k24/Final Images/12.jpg",
    },
    {
      id: 13,
      img: "/images/Glimpse 2k24/Final Images/13.jpg",
    },
    {
      id: 14,
      img: "/images/Glimpse 2k24/Final Images/14.jpg",
    },
    {
      id: 15,
      img: "/images/Glimpse 2k24/Final Images/15.jpg",
    },
    {
      id: 16,
      img: "/images/Glimpse 2k24/Final Images/16.jpg",
    },
    {
      id: 17,
      img: "/images/Glimpse 2k24/Final Images/17.jpg",
    },
    {
      id: 18,
      img: "/images/Glimpse 2k24/Final Images/18.jpg",
    },
    {
      id: 19,
      img: "/images/Glimpse 2k24/Final Images/19.jpg",
    },
    {
      id: 20,
      img: "/images/Glimpse 2k24/Final Images/20.jpeg",
    },
    {
      id: 21,
      img: "/images/Glimpse 2k24/Final Images/21.jpg",
    },
  ];
  

const SIH_2024GlimpseGallery = () => {
  const [data] = useState(galleryImages);

  return (
    <>
      <section className="glimpse container">
        <div className="paddings innerWidth theme-container">
          <div className="theme-head flexColStart">
            <span className="primaryText">2024 Snapshots</span>
          </div>

          <Swiper {...sliderSettings}>
            {/* Buttons for slider */}

            <SliderButtons />

            {data.map((element) => {
              return (
                <SwiperSlide key={element.id}>
                  <div className="flexColCenter glimpse-card">
                    <img src={element.img} alt="Announcement Logo" />
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </section>
    </>
  );
};

export default SIH_2024GlimpseGallery;

const SliderButtons = () => {
  // useSwiper Hook
  const swiper = useSwiper();

  return (
    <div className="slider-button">
      <button onClick={() => swiper.slidePrev()}>&lt;</button>
      <button onClick={() => swiper.slideNext()}>&gt;</button>
    </div>
  );
};
