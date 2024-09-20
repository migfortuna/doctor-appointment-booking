import React from "react";
import { useNavigate } from "react-router-dom";

const DoctorCard = ({ doc }) => {
  const navigate = useNavigate();
  return (
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
  );
};

export default DoctorCard;
