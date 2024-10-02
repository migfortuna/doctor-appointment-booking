export const checkBody = async (req, res, next) => {
  if (!req.body.email) {
    const error = new Error();
    error.status = 400;
    return next(error);
  }
  next();
};
