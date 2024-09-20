import React from "react";
import { useParams } from "react-router-dom";
import AllDoctors from "../components/Doctors/AllDoctors";
import SpecialityDoctors from "../components/Doctors/SpecialityDoctors";

const Doctors = () => {
  const { speciality } = useParams();
  return !speciality ? (
    <AllDoctors />
  ) : (
    <SpecialityDoctors speciality={speciality} />
  );
};

export default Doctors;
