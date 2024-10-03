import { Router } from "express";
import {
  getAccountSchema,
  newAccountSchema,
  updateAccountSchema,
} from "./schema.js";
import {
  validateSchema,
  findUserFromBody,
  checkDuplicateEmail,
} from "./middleware.js";
import { getAllUsers, getUser, addAccount, updateAccount } from "./handlers.js";

const router = Router();

router.get("/all", getAllUsers);
router.post("/", validateSchema(getAccountSchema), findUserFromBody, getUser);
router.post(
  "/new",
  validateSchema(newAccountSchema),
  checkDuplicateEmail,
  addAccount
);
router.patch(
  "/",
  validateSchema(updateAccountSchema),
  findUserFromBody,
  updateAccount
);

export default router;
