import React from "react";
import { assets } from "../assets/assets";

const Contact = () => {
  return (
    <section className="sm:mx-[10%]">
      <h1 className="uppercase text-center text-2xl pt-10 text-gray-500">
        contact <span className="font-medium text-gray-700">us</span>
      </h1>

      {/* IMAGE and ABOUT TEXT */}
      <div className="flex flex-col lg:flex-row items-center justify-center my-10 gap-12">
        <img
          src={assets.contact_image}
          alt="about-us"
          className="w-full sm:max-w-[360px]"
        />
        <div className="flex flex-col justify-center lg:w-2/4 text-sm text-gray-600">
          <div className="mb-10">
            <b className="uppercase text-gray-800">Our Office</b>
            <p className="mt-5">54709 Willms Station</p>
            <p className="mb-5">Suite 350, Washington, USA</p>
            <p>Tel: (415) 555‑0132</p>
            <p>Email: greatstackdev@gmail.com</p>
          </div>
          <div>
            <b className="uppercase text-gray-800 mb-4">
              Careers at PRESCRIPTO
            </b>
            <p className="mt-2 mb-4">
              Learn more about our teams and job openings.
            </p>
            <button
              className="capitalize border border-gray-600 py-3 px-5
              hover:bg-gray-600 hover:text-white transition-all duration-500"
            >
              explore jobs
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
