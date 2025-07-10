import errorHandlersList from "../errors/errorHandlersList.js";
import sendErrorDev from "../errors/sendErrorDev.js";
import sendErrorProd from "../errors/sendErrorProd.js";

export default (err, req, res, next) => {
  // let error = { ...err };
  err.status = err?.status || "error";
  err.statusCode = err?.statusCode || 500;

  if (process.env.NODE_ENV === "production") {
    for (let handler of errorHandlersList) {
      if (handler.match(err)) {
        err = handler.helper(err);
      }
    }

    sendErrorProd(err, res);
  } else {
    sendErrorDev(err, res);
  }
};
