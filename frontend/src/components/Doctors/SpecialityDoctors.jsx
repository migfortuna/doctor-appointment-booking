import React, { useContext } from "react";
import { AppContext } from "../../context";
import SpecialityList from "./SpecialityList";
import DoctorCard from "../DoctorCard";

const SpecialityDoctors = ({ speciality }) => {
  const { doctors } = useContext(AppContext);
  const specDoctors = doctors.filter((doc) => doc.speciality == speciality);
  return (
    <section className="sm:mx-[10%] mb-20">
      <p className="capitalize italic mb-5 text-sm">
        browse through the doctor specialities
      </p>
      <div className="flex flex-col md:flex-row gap-3">
        <SpecialityList />
        <div className="w-full grid grid-cols-auto gap-3 sm:px-0">
          {specDoctors.map((doc) => (
            <DoctorCard key={doc._id} doc={{ ...doc }} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpecialityDoctors;
