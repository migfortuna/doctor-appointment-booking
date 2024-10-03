import yup from "yup";

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
