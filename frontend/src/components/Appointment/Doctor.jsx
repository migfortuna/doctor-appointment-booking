import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../../context";
import { assets } from "../../assets/assets";

const Doctor = () => {
  const { doctorId } = useParams();
  const { doctors } = useContext(AppContext);
  const docInfo = doctors.find((doc) => doc._id == doctorId);

  return (
    <div className="flex flex-col gap-4 md:flex-row">
      {/* DOC IMAGE */}
      <div className="max-md:m-auto">
        <img
          className="bg-primary w-full rounded-lg sm:max-w-72"
          src={docInfo.image}
          alt="doctor-image"
        />
      </div>

      {/* DOC DETAILS */}
      <div
        className="flex-1 bg-white border border-gray-400 rounded-lg 
        p-8 py-7 mx-2 sm:mx-0 sm:mt-0 mt-[-80px]"
      >
        <p className="flex items-center gap-2 text-xl md:text-2xl font-medium text-gray-900">
          {docInfo.name}{" "}
          <img
            src={assets.verified_icon}
            alt="doctor-verified"
            className="w-5"
          />
        </p>

        {/* degree - speciality / experience */}
        <div className="flex items-center gap-2 text-sm mt-1 text-gray-600">
          <p>
            {docInfo.degree} -{" "}
            <span className="capitalize">{docInfo.speciality}</span>
          </p>
          <p className="border rounded-full py-0.5 px-2 text-xs">
            {docInfo.experience}
          </p>
        </div>

        <p className="flex items-center gap-1 mt-3 text-sm font-medium text-gray-900">
          About <img src={assets.info_icon} alt="" />
        </p>

        <p className="text-sm text-gray-500 max-w-[700px] mt-1">
          {docInfo.about}
        </p>

        <p className="text-gray-500 font-medium mt-4">
          Appointment Fee:{" "}
          <span className="text-gray-600">${docInfo.fees}</span>
        </p>
      </div>
    </div>
  );
};

export default Doctor;
