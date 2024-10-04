import yup from "yup";

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export const getAccountSchema = yup.object({
  body: yup.object({
    email: yup.string().email().trim().required(),
  }),
});

export const newAccountSchema = yup.object({
  body: yup.object({
    firstName: yup.string().trim().required(),
    middleName: yup.string().trim().strict(true),
    lastName: yup.string().trim().required(),
    email: yup.string().email().trim().required(),
  }),
});

export const updateAccountSchema = yup.object({
  body: yup.object({
    firstName: yup.string().trim().required(),
    lastName: yup.string().trim().required(),
    email: yup.string().email().trim().required(),
    newEmail: yup.string().email().trim().required(),
    phone: yup
      .string()
      .trim()
      .nullable()
      .transform((curr, orig) => (curr == "" ? null : orig))
      .length(11),
    address: yup.string().trim(),
    gender: yup.string().trim().oneOf(["Male", "Female", "Other"]),
    birthMonth: yup
      .string()
      .trim()
      .required()
      .oneOf(months, "body.birthMonth must be one of the 12 months"),
    birthDay: yup.number().min(1).max(31).required(),
    birthYear: yup.number().min(1920).max(3000).required(),
  }),
});
