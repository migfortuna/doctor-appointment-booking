export const logger = (req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
};

export const notExistsEndpoint = (req, res, next) => {
  const error = new Error();
  error.status = 404;
  next(error);
};

export const errorHandler = (err, req, res, next) => {
  const status = err.status || 500;
  const errorMapper = {
    400: "Invalid Request",
    404: "Resource Not Found",
    409: "Record already exists",
    500: err.message ?? "Internal Server Error",
  };
  res.status(status).send({ error: err.message || errorMapper[status] });
};
