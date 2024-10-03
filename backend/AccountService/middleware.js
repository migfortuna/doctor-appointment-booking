import { accounts } from "../data.js";

export const validateSchema = (schema) => async (req, res, next) => {
  try {
    await schema.validate(req);
    next();
  } catch (err) {
    const error = new Error(err.errors[0]);
    error.status = 400;
    return next(error);
  }
};

export const checkDuplicateEmail = async (req, res, next) => {
  const duplicate = await accounts.find((acc) => acc.email == req.body.email);
  if (duplicate) {
    const error = new Error();
    error.status = 409;
    return next(error);
  }
  next();
};

export const findUserFromBody = async (req, res, next) => {
  try {
    const exists = accounts.find((acc) => acc.email == req.body.email);
    if (!exists) {
      const error = new Error();
      error.status = 404;
      return next(error);
    }
    req.currentUser = exists;
    next();
  } catch (err) {
    return next(new Error(err));
  }
};
