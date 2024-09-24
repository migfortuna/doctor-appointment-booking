export const getAllDoctors = async (req, res, next) => {
  try {
    res.send({ data: [] });
  } catch (err) {
    return next(new Error(err));
  }
};
