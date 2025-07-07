import createNewProduct from "../services/createNewProduct.js";
import AppError from "../errors/appError.js";
import catchAsync from "../utils/catchAsync.js";

const createProduct = catchAsync(async (req, res, next) => {
  let { name, price, img } = req.body;

  if (!name || !price || !img)
    return next(new AppError("Please provide all fields...", 400));

  const createdProduct = await createNewProduct({ name, price, img });

  res.status(201).json({
    success: true,
    data: createdProduct,
  });
});

export default createProduct;
