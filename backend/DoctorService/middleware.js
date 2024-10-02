import { doctors } from "../data.js";

export const findDoctor = async (req, res, next) => {
  const doctor = await doctors.find((doc) => doc._id == req.params.doctorId);
  if (!doctor) {
    const error = new Error();
    error.status = 404;
    return next(error);
  }
  req.currentDoctor = doctor;
  next();
};
