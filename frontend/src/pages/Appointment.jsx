import React from "react";
import Doctor from "../components/Appointment/Doctor";
import RelatedDoctors from "../components/Appointment/RelatedDoctors";

const Appointment = () => {
  return (
    <section className="sm:mx-[10%]">
      <Doctor />
      <RelatedDoctors />
    </section>
  );
};

export default Appointment;
