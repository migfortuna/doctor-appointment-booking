import { doctors } from "../data.js";

export const getAllDoctors = async (req, res, next) => {
  try {
    res.send({ data: doctors });
  } catch (err) {
    return next(new Error(err));
  }
};

export const getDoctor = async (req, res, next) => {
  try {
    res.send({ data: req.currentDoctor });
  } catch (err) {
    return next(new Error(err));
  }
};
