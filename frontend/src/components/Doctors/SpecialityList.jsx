import React, { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AppContext } from "../../context";

const SpecialityList = () => {
  const navigate = useNavigate();
  const { speciality } = useParams();
  const { specialityData } = useContext(AppContext);
  const allSpecialities = [{ speciality: "All" }, ...specialityData];
  return (
    <div className="flex flex-row flex-wrap md:flex-col gap-2">
      {allSpecialities.map((spec, index) => (
        <p
          key={index}
          className={`border p-2 rounded-md 
            text-xs capitalize cursor-pointer ${
              speciality == spec.speciality
                ? "bg-primary text-white"
                : "hover:bg-gray-200 border-gray-300"
            }`}
          onClick={() =>
            navigate(
              spec.speciality == "All"
                ? "/doctors"
                : `/doctors/${spec.speciality}`
            )
          }
        >
          {spec.speciality}
        </p>
      ))}
    </div>
  );
};

export default SpecialityList;
