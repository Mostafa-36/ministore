const sendErrorProd = (err, res) => {
  if (err.isOperational) {
    res.status(err.statusCode).json({
      status: err.status,
      message: err.message,
      success: false,
    });
  } else {
    res.status(500).json({
      status: "error",
      message: "internal server error: something went very wrong...",
      success: false,
    });
  }
};

export default sendErrorProd;
