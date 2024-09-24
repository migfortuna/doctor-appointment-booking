import { Router } from "express";
import { getAllDoctors } from "../handlers/doctors.js";

const router = Router();

router.get("/", getAllDoctors);

export default router;
