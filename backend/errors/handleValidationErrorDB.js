import AppError from "./AppError.js";

const handleValidationErrorDB = (err) => {
  const errors = Object.keys(err.errors).map((el) => el.message);
  const message = `Invalid input data. ${errors.join(", ")}`;
  return new AppError(message, 400);
};

export default handleValidationErrorDB;
