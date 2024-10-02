import express from "express";
import cors from "cors";
import { logger, notExistsEndpoint, errorHandler } from "./middleware/main.js";
import doctorRouter from "./DoctorService/routes.js";
import accountRouter from "./AccountService/routes.js";

const app = express();
const port = process.env.PORT;

app.use(cors());
app.use(express.json());
app.use(logger);

app.use("/api/doctors", doctorRouter);
app.use("/api/account", accountRouter);

app.use(notExistsEndpoint);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
