import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

const Layout = () => {
  return (
    <div className="mx-4">
      <Navbar />
      <Outlet />
    </div>
  );
};

export default Layout;
