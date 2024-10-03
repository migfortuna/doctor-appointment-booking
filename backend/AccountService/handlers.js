import { accounts } from "../data.js";

export const getAllUsers = async (req, res, next) => {
  try {
    res.send({ data: [...accounts] });
  } catch (err) {
    return next(new Error(err));
  }
};

export const getUser = async (req, res, next) => {
  try {
    res.send({ data: { ...req.currentUser } });
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

export const updateAccount = async (req, res, next) => {
  try {
    const index = accounts.indexOf(req.currentUser);
    accounts[index] = {
      ...accounts[index],
      ...req.body,
    };
    res.send({ data: { ...accounts[index] } });
  } catch (err) {
    return next(new Error(err));
  }
};
