import React from "react";
import { assets } from "../assets/assets";

const appointments = [
  {
    name: "Dr. Richard James",
    speciality: "General physician",
    address: {
      line1: "17th Cross, Richmond",
      line2: "Circle, Ring Road, London",
    },
    date: "25, July, 2024",
    time: "8:30 PM",
  },
  {
    name: "Dr. Richard James",
    speciality: "General physician",
    address: {
      line1: "17th Cross, Richmond",
      line2: "Circle, Ring Road, London",
    },
    date: "25, July, 2024",
    time: "8:30 PM",
  },
  {
    name: "Dr. Richard James",
    speciality: "General physician",
    address: {
      line1: "17th Cross, Richmond",
      line2: "Circle, Ring Road, London",
    },
    date: "25, July, 2024",
    time: "8:30 PM",
  },
  {
    name: "Dr. Richard James",
    speciality: "General physician",
    address: {
      line1: "17th Cross, Richmond",
      line2: "Circle, Ring Road, London",
    },
    date: "25, July, 2024",
    time: "8:30 PM",
  },
];

const MyAppointments = () => {
  return (
    <section className="sm:mx-[10%]">
      <h2 className="pb-3 mt-12 font-medium text-zinc-700 border-b">
        My Appointments
      </h2>

      {appointments.map((item, index) => (
        <div
          key={index}
          className="flex flex-col md:flex-row md:justify-between max-md:gap-3 py-2 border-b"
        >
          <div className="flex flex-1 flex-col md:flex-row gap-3">
            <img
              src={assets.doc1}
              alt="doctor"
              className="w-60 md:w-36 bg-indigo-50 self-center"
            />
            <div className="flex flex-col justify-center text-sm text-zinc-600">
              <p className="text-neutral-800 font-semibold">{item.name}</p>
              <p className="capitalize">{item.speciality}</p>
              <p className="text-zinc-700 font-medium mt-2">Address:</p>
              <p className="text-xs">{item.address.line1}</p>
              <p className="text-xs">{item.address.line2}</p>
              <p className="text-xs mt-2">
                <span className="text-neutral-700 font-medium">
                  Date & Time:
                </span>{" "}
                {item.date} | {item.time}
              </p>
            </div>
          </div>

          <div className="flex md:flex-col justify-evenly md:justify-end gap-1 text-xs">
            <button
              className="w-full border border-gray-300 rounded px-5 py-3
              hover:bg-primary hover:text-white hover:border-primary transition-all duration-300"
            >
              Pay Online
            </button>
            <button
              className="w-full border border-gray-300 rounded px-5 py-3
              hover:bg-red-600 hover:text-white hover:border-red-600 transition-all duration-300"
            >
              Cancel Appointment
            </button>
          </div>
        </div>
      ))}
    </section>
  );
};

export default MyAppointments;
