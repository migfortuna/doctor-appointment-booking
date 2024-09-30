import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../context";
import Doctor from "../components/Appointment/Doctor";
import RelatedDoctors from "../components/Appointment/RelatedDoctors";

const Appointment = () => {
  const { doctorId } = useParams();
  const { doctors } = useContext(AppContext);
  const docInfo = doctors.find((doc) => doc._id == doctorId);
  const relatedDoctors = doctors.filter(
    (doc) => doc.speciality == docInfo.speciality && doc._id !== docInfo._id
  );

  return (
    <section className="sm:mx-[10%]">
      <Doctor docInfo={{ ...docInfo }} />
      {relatedDoctors.length > 0 && (
        <RelatedDoctors relatedDocs={relatedDoctors} />
      )}
    </section>
  );
};

export default Appointment;
