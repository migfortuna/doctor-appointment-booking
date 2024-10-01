import React from "react";
import { assets } from "../assets/assets.js";

const About = () => {
  return (
    <section className="sm:mx-[10%]">
      <h1 className="uppercase text-center text-2xl pt-10 text-gray-500">
        about <span className="font-medium text-gray-700">us</span>
      </h1>

      {/* IMAGE and ABOUT TEXT */}
      <div className="flex flex-col lg:flex-row items-center my-10 gap-12">
        <img
          src={assets.about_image}
          alt="about-us"
          className="w-full sm:max-w-[360px]"
        />
        <div className="flex flex-col justify-center gap-6 lg:w-2/4 text-sm text-gray-600">
          <p>
            Welcome to Prescripto, your trusted partner in managing your
            healthcare needs conveniently and efficiently. At Prescripto, we
            understand the challenges individuals face when it comes to
            scheduling doctor appointments and managing their health records.
          </p>
          <p>
            Prescripto is committed to excellence in healthcare technology. We
            continuously strive to enhance our platform, integrating the latest
            advancements to improve user experience and deliver superior
            service. Whether you're booking your first appointment or managing
            ongoing care, Prescripto is here to support you every step of the
            way.
          </p>
          <b className="text-gray-800">Our Vision</b>
          <p>
            Our vision at Prescripto is to create a seamless healthcare
            experience for every user. We aim to bridge the gap between patients
            and healthcare providers, making it easier for you to access the
            care you need, when you need it.
          </p>
        </div>
      </div>

      <h3 className="uppercase text-xl my-4">
        why <span className="font-semibold text-gray-700">choose us</span>
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 text-[15px]">
        <div
          className="border p-10 
          hover:bg-primary hover:text-white transition-all duration-300 cursor-pointer"
        >
          <p className="uppercase font-bold mb-3">efficiency:</p>
          <p>
            Streamlined appointment scheduling that fits into your busy
            lifestyle.
          </p>
        </div>
        <div
          className="border p-10
          hover:bg-primary hover:text-white transition-all duration-300 cursor-pointer"
        >
          <p className="uppercase font-bold mb-3">convenience:</p>
          <p>
            Access to a network of trusted healthcare professionals in your
            area.
          </p>
        </div>
        <div
          className="border p-10
          hover:bg-primary hover:text-white transition-all duration-300 cursor-pointer"
        >
          <p className="uppercase font-bold mb-3">personalization:</p>
          <p>
            Tailored recommendations and reminders to help you stay on top of
            your health.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
