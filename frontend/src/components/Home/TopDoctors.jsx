import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../../context";
import DoctorCard from "../DoctorCard";

const TopDoctors = () => {
  const navigate = useNavigate();

  // CONTEXT CONSUMER
  // consumes the data from the provider context
  const { doctors } = useContext(AppContext);
  return (
    <section className="sm:mx-[10%] flex flex-col items-center gap-4 my-16 text-gray-900">
      <h1 className="capitalize text-3xl font-medium">top doctors to book</h1>
      <p className="sm:w-1/2 md:w-1/3 text-center text-sm">
        Simply browse through our extensive list of trusted doctors.
      </p>
      <div className="w-full grid grid-cols-auto gap-4 pt-5 gap-y-6 px-3 sm:px-0">
        {doctors.slice(0, 10).map((doc) => (
          <DoctorCard key={doc._id} doc={{ ...doc }} />
        ))}
      </div>
      <button
        className="uppercase bg-blue-100 px-12 py-3 rounded-full mt-10 text-gray-500"
        onClick={() => navigate("/doctors")}
      >
        more
      </button>
    </section>
  );
};

export default TopDoctors;
