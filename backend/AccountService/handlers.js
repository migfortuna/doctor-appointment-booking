import { accounts } from "../data.js";

export const getUser = async (req, res, next) => {
  try {
    const user = await accounts.find((acc) => acc.email == req.body.email);
    if (!user) {
      const error = new Error();
      error.status = 404;
      return next(error);
    }
    res.send({ data: { ...user } });
  } catch (err) {
    return next(new Error(err));
  }
};
