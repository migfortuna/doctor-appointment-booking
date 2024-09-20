import React from "react";
import { Link } from "react-router-dom";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <section className="sm:mx-[5%] my-10 flex flex-col max-md:gap-5 md:flex-row md:justify-between text-sm">
      <div className="md:basis-2/3">
        <Link to="/">
          <img src={assets.logo} alt="logo" className="mb-5 w-32" />
          <p
            className="w-full md:w-[90%] lg:w-full
          text-gray-600 leading-6"
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </Link>
      </div>
      <div>
        <p className="uppercase font-medium mb-5">company</p>
        <ul className="text-gray-600 space-y-1">
          <li>Home</li>
          <li>About Us</li>
          <li>Contact</li>
          <li>Privacy Policy</li>
        </ul>
      </div>
      <div>
        <p className="uppercase font-medium mb-5">get in touch</p>
        <ul className="text-gray-600 space-y-1">
          <li>+63 987 654 3210</li>
          <li>email@email.com.ph</li>
        </ul>
      </div>
    </section>
  );
};

export default Footer;
