import AppError from "./AppError.js";

const handleCastError = (err) => {
  const message = `Invalide ${err.path}: ${err.value}`;
  return new AppError(message, 400);
};

export default handleCastError;
