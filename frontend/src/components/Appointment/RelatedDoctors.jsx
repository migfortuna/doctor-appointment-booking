import React from "react";
import DoctorCard from "../DoctorCard";

const RelatedDoctors = ({ relatedDocs }) => {
  return (
    <div className="flex flex-col items-center gap-4 my-16 text-gray-900 md:mx-10">
      <h1 className="capitalize text-3xl font-medium">related doctors</h1>
      <p className="text-sm">
        Simply browse through our extensive list of trusted doctors.
      </p>

      <div className="w-full grid grid-cols-auto gap-4 pt-5 gap-y-6 px-3 sm:px-0">
        {relatedDocs.map((doc) => (
          <DoctorCard key={doc._id} doc={{ ...doc }} />
        ))}
      </div>
    </div>
  );
};

export default RelatedDoctors;
