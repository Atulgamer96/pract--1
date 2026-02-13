import React, { useState } from "react";
import { sliderSettings } from "../../utils/common";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";

const galleryImages = [
    {
      id: 1,
      img: "/images/Glimpse 2k24/Final Img/1.JPG",
    },
    {
      id: 2,
      img: "/images/Glimpse 2k24/Final Img/2.JPG",
    },
    {
      id: 3,
      img: "/images/Glimpse 2k24/Final Img/3.jpg",
    },
    {
      id: 4,
      img: "/images/Glimpse 2k24/Final Img/4.jpg",
    },
    {
      id: 5,
      img: "/images/Glimpse 2k24/Final Img/5.jpg",
    },
    {
      id: 6,
      img: "/images/Glimpse 2k24/Final Img/6.jpg",
    },
    {
      id: 7,
      img: "/images/Glimpse 2k24/Final Img/7.JPG",
    },
    {
      id: 8,
      img: "/images/Glimpse 2k24/Final Img/8.JPG",
    },
    {
      id: 9,
      img: "/images/Glimpse 2k24/Final Img/9.JPG",
    },
    {
      id: 10,
      img: "/images/Glimpse 2k24/Final Img/10.JPG",
    },
    {
      id: 11,
      img: "/images/Glimpse 2k24/Final Img/11.JPG",
    },
    {
      id: 12,
      img: "/images/Glimpse 2k24/Final Img/12.JPG",
    },
    {
      id: 13,
      img: "/images/Glimpse 2k24/Final Img/13.JPG",
    },
    {
      id: 14,
      img: "/images/Glimpse 2k24/Final Img/14.jpg",
    },
    {
      id: 15,
      img: "/images/Glimpse 2k24/Final Img/15.JPG",
    },
    {
      id: 16,
      img: "/images/Glimpse 2k24/Final Img/16.JPG",
    },
    {
      id: 17,
      img: "/images/Glimpse 2k24/Final Img/17.jpg",
    },
    {
      id: 18,
      img: "/images/Glimpse 2k24/Final Img/18.jpg",
    },
    {
      id: 19,
      img: "/images/Glimpse 2k24/Final Img/19.jpg",
    },
    {
      id: 20,
      img: "/images/Glimpse 2k24/Final Img/20.jpeg",
    },
    {
      id: 21,
      img: "/images/Glimpse 2k24/Final Img/21.JPG",
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
