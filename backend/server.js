import express from "express";
import { logger, notExistsEndpoint, errorHandler } from "./middleware/main.js";
import doctorRouter from "./routes/doctors.js";

const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use(logger);

app.use("/api/doctors", doctorRouter);

app.use(notExistsEndpoint);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
