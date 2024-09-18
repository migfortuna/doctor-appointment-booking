import React from "react";
import { Link } from "react-router-dom";
import { assets } from "../../assets/assets";

const Header = () => {
  return (
    <section
      className="sm:mx-[10%] flex flex-col flex-wrap md:flex-row bg-primary 
      rounded-lg px-6 md:px-10 lg:px-20"
    >
      {/* LEFT */}
      <div
        className="md:w-1/2 flex flex-col items-start justify-center gap-4
        py-10 m-auto md:py-[10vw] md:mb-[-30px]"
      >
        <h1
          className="capitalize text-3xl md:text-4xl lg:text-5xl
          text-white font-semibold leading-tight"
        >
          book appointment with trusted doctors
        </h1>
        <div
          className="flex flex-col lg:flex-row items-start lg:items-center gap-3
          text-white text-sm font-light"
        >
          <img
            className="w-28"
            src={assets.group_profiles}
            alt="home-header-group-profiles"
          />
          <p>
            Simply browse through our extensive list of trusted doctors,
            schedule your appointment hassle-free.
          </p>
        </div>

        <a
          href="#speciality"
          className="capitalize flex items-center gap-2 bg-white px-8 py-3 rounded-full 
          text-sm m-auto md:m-0 hover:scale-105 transition-all duration-300"
        >
          book appointment
          <img
            className="w-3"
            src={assets.arrow_icon}
            alt="home-header-book-appointment"
          />
        </a>
      </div>

      {/* RIGHT */}
      <div className="md:w-1/2 relative">
        <img
          className="w-full h-auto rounded-lg md:absolute bottom-0"
          src={assets.header_img}
          alt="home-header-image"
        />
      </div>
    </section>
  );
};

export default Header;
