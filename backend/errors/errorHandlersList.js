import handleCastError from "./handleCastError.js";
import handleValidationErrorDB from "./handleValidationErrorDB.js";

const errorHandlersList = [
  { match: (err) => err.name === "CastError", helper: handleCastError },
  {
    match: (err) => err.name === "ValidationError",
    helper: handleValidationErrorDB,
  },
];

export default errorHandlersList;
