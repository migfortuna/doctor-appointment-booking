import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = () => {
  return (
    <div className="mx-4">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
