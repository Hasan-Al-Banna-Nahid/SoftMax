"use client";
import React, { useRef, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { FaQuoteLeft } from "react-icons/fa";
const Card = () => {
  return (
    <div>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        // navigation={true}
        loop={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper bg-white"
      >
        <SwiperSlide>
          <div className="md:flex justify-center items-center p-6  sm:flex-col">
            <div>
              <h2 className="text-2xl font-bold ">
                No investment of your time without value, <br /> knowledge or
                Let money pay off your time investment.
                <FaQuoteLeft className="text-gray-400 text-2xl" />
              </h2>
            </div>
            <div>
              <iframe
                src="https://lottie.host/embed/965be55c-7a36-4d43-adea-e7d3cc939b80/PTMUZQl0x2.json"
                width={400}
                height={400}
              ></iframe>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div className="md:flex justify-center items-center p-6 sm:flex-col">
            <div>
              <h2 className="text-2xl font-bold ">
                Facilitating the process of finding good education and <br />
                teachers for students and creating employment for teachers.
                <FaQuoteLeft className="text-gray-400 text-2xl" />
              </h2>
            </div>
            <div>
              <iframe
                src="https://lottie.host/embed/cba0d6c0-8a2c-414f-b4d0-47a623fafdd5/e6bIfmgvqi.json"
                width={400}
                height={400}
              ></iframe>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div className="md:flex   justify-center items-center p-6 sm:flex-col">
            <div>
              <h2 className="text-2xl font-bold ">
                Investment of your time is no more without value, <br /> let
                knowledge or money be the reward for your investment of time.
                <FaQuoteLeft className="text-gray-400 text-2xl" />
              </h2>
            </div>
            <div>
              <iframe
                src="https://lottie.host/embed/dfe9dd5b-daf6-4daf-994b-3a16f9227e5d/bczQnZ4vfI.json"
                width={400}
                height={400}
              ></iframe>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="md:flex  justify-center items-center p-6 sm:flex-col">
            <div>
              <h2 className="text-2xl font-bold ">
                Simplifying the learning process by <br /> leveraging technology
                and possibilities.
                <FaQuoteLeft className="text-gray-400 text-2xl" />
              </h2>
            </div>
            <div>
              <iframe
                src="https://lottie.host/embed/48f7d16c-32e9-47ac-a27a-aa639e9d0fc4/6KOXTHb64l.json"
                width={400}
                height={400}
              ></iframe>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Card;
