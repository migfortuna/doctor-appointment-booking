import { Router } from "express";
import { checkBody } from "./middleware.js";
import { getUser } from "./handlers.js";

const router = Router();

router.use(checkBody);

router.post("/", getUser);

export default router;
