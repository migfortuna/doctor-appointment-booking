import React from "react";
import { specialityData } from "../../assets/assets";
import { Link } from "react-router-dom";

const SpecialityMenu = () => {
  return (
    <section
      id="speciality"
      className="flex flex-col items-center gap-4 py-16 text-gray-800"
    >
      <h1 className="capitalize text-3xl font-medium">find by speciality</h1>
      <p className="sm:w-1/2 md:w-1/3 text-center text-sm">
        Simply browse through our extensive list of trusted doctors, schedule
        your appointment hassle-free.
      </p>
      <div className="flex sm:justify-center gap-4 py-5 w-full overflow-scroll">
        {specialityData.map((spec, index) => (
          <Link
            key={index}
            to={`/doctors/${spec.speciality}`}
            className="flex flex-col flex-shrink-0 items-center
            text-xs cursor-pointer hover:translate-y-[-10px] transition-all
            duration-500"
            onClick={() => scrollTo(0, 0)}
          >
            <img
              src={spec.image}
              alt={spec.speciality}
              className="w-16 md:w-24 mb-2"
            />
            <p>{spec.speciality}</p>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default SpecialityMenu;
