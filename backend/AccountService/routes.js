import { Router } from "express";
import { getAccountSchema, newAccountSchema } from "./schema.js";
import { validateSchema, checkDuplicateEmail } from "./middleware.js";
import { getUser, addAccount } from "./handlers.js";

const router = Router();

router.post("/", validateSchema(getAccountSchema), getUser);
router.post(
  "/new",
  validateSchema(newAccountSchema),
  checkDuplicateEmail,
  addAccount
);

export default router;
