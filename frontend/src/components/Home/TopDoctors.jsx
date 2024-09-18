import React from "react";
import { useNavigate } from "react-router-dom";
import { doctors } from "../../assets/assets";

const TopDoctors = () => {
  const navigate = useNavigate();
  return (
    <section className="sm:mx-[10%] flex flex-col items-center gap-4 my-16 text-gray-900">
      <h1 className="capitalize text-3xl font-medium">top doctors to book</h1>
      <p className="sm:w-1/2 md:w-1/3 text-center text-sm">
        Simply browse through our extensive list of trusted doctors.
      </p>
      <div className="w-full grid grid-cols-auto gap-4 pt-5 gap-y-6 px-3 sm:px-0">
        {doctors.slice(0, 10).map((doc) => (
          <div
            key={doc._id}
            className="border border-blue-200 rounded-xl overflow-hidden cursor-pointer
            hover:translate-y-[-10px] transition-all duration-500"
            onClick={() => navigate(`/appointment/${doc._id}`)}
          >
            <img src={doc.image} alt={doc.name} className="bg-blue-50" />
            <div className="p-4">
              <div className="flex items-center gap-1 text-sm text-center text-green-500">
                <p className="w-2 h-2 bg-green-500 rounded-full"></p>
                <p className="capitalize">available</p>
              </div>
              <h2 className="text-gray-900 text-lg font-medium">{doc.name}</h2>
              <p className="text-gray-600 text-sm">{doc.speciality}</p>
            </div>
          </div>
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
