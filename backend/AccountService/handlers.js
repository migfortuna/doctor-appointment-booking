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

export const addAccount = async (req, res, next) => {
  try {
    const newAccount = {
      id: accounts.length + 1,
      firstName: req.body.firstName,
      middleName: req.body.middleName,
      lastName: req.body.lastName,
      email: req.body.email,
      phone: "",
      address: "",
      gender: "",
      birthMonth: "",
      birthDay: null,
      birthYear: null,
    };
    accounts.push(newAccount);
    res.status(201).send({ data: newAccount });
  } catch (err) {
    return next(new Error(err));
  }
};
