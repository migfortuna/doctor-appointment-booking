import React from "react";
import { useNavigate } from "react-router-dom";
import { assets } from "../../assets/assets";

const Banner = () => {
  const navigate = useNavigate();
  return (
    <section
      className="flex bg-primary rounded-lg
      px-6 sm:px-10 md:px-12 lg:px-14 my-20 md:mx-10"
    >
      {/* LEFT SIDE */}
      <div className="flex-1 py-8 sm:py-10 md:py-16 lg:py-24 lg:pl-5">
        <div className="capitalize font-semibold text-white text-xl sm:text-2xl md:text-3xl lg:text-5xl">
          <h2>book appointment</h2>
          <h2 className="mt-4">with 100+ trusted doctors</h2>
        </div>

        <button
          className="capitalize bg-white mt-6 px-8 py-3 rounded-full 
          text-sm sm:text-base text-gray-600 hover:scale-105 transition-all duration-300"
          onClick={() => {
            navigate("/login");
            scrollTo(0, 0);
          }}
        >
          create account
        </button>
      </div>

      {/* RIGHT SIDE */}
      <div className="hidden md:block md:w-1/2 lg:w-[370px] relative">
        <img
          src={assets.appointment_img}
          alt="appointment"
          className="absolute w-[80%] lg:w-full max-w-md bottom-0 right-0"
        />
      </div>
    </section>
  );
};

export default Banner;
