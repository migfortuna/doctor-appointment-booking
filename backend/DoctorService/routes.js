import { Router } from "express";
import { findDoctor } from "./middleware.js";
import { getAllDoctors, getDoctor } from "./handlers.js";

const router = Router();

router.param("doctorId", findDoctor);

router.get("/", getAllDoctors);
router.get("/:doctorId", getDoctor);

export default router;
