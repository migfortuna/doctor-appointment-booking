import React from "react";
import Header from "../components/Home/Header";
import SpecialityMenu from "../components/Home/SpecialityMenu";
import TopDoctors from "../components/Home/TopDoctors";

const Home = () => {
  return (
    <>
      <Header />
      <SpecialityMenu />
      <TopDoctors />
    </>
  );
};

export default Home;
