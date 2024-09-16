import React, { useState } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { assets } from "../assets/assets";

const Navbar = () => {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);
  const [token, setToken] = useState(true); // is user logged in or not
  return (
    <nav className="flex items-center justify-between py-4 mb-5 border-b border-b-gray-400 text-sm">
      <Link to="/">
        <img
          src={assets.logo}
          alt="navbar-logo"
          className="w-44 cursor-pointer"
        />
      </Link>
      <ul className="hidden lg:flex gap-5 font-medium">
        <NavLink to="/" className="">
          <li className="uppercase py-1">home</li>
          <hr className="border-none outline-none h-0.5 bg-primary w-4/5 m-auto hidden" />
        </NavLink>
        <NavLink to="/doctors" className="">
          <li className="uppercase py-1">all doctors</li>
          <hr className="border-none outline-none h-0.5 bg-primary w-4/5 m-auto hidden" />
        </NavLink>
        <NavLink to="/about" className="">
          <li className="uppercase py-1">about</li>
          <hr className="border-none outline-none h-0.5 bg-primary w-4/5 m-auto hidden" />
        </NavLink>
        <NavLink to="/contact" className="">
          <li className="uppercase py-1">contact</li>
          <hr className="border-none outline-none h-0.5 bg-primary w-4/5 m-auto hidden" />
        </NavLink>
      </ul>
      {token ? (
        <div className="flex items-center gap-2 cursor-pointer group relative">
          <img
            className="w-8 rounded-full"
            src={assets.profile_pic}
            alt="navbar-profile-pic"
          />
          <img
            className="w-2.5"
            src={assets.dropdown_icon}
            alt="navbar-dropdown-icon"
          />
          <div className="absolute top-0 right-0 pt-14 text-base font-medium text-gray-600 z-20 hidden group-hover:block">
            <div className="min-w-44 flex flex-col bg-stone-100 rounded-sm p-1">
              <Link to="/profile" className="p-2 hover:bg-stone-200 rounded-md">
                My Profile
              </Link>
              <Link
                to="/appointments"
                className="p-2 hover:bg-stone-200 rounded-md"
              >
                My Appointments
              </Link>
              <Link
                to="/"
                className="p-2 hover:bg-stone-200 rounded-md"
                onClick={() => setToken(false)}
              >
                Logout
              </Link>
            </div>
          </div>
        </div>
      ) : (
        <Link
          to="/login"
          className="bg-primary text-white px-8 py-3 rounded-full font-light hidden md:block"
        >
          Create Account
        </Link>
      )}
    </nav>
  );
};

export default Navbar;
