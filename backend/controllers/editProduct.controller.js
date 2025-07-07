import updateProduct from "../services/updateProduct.js";
import catchAsync from "../utils/catchAsync.js";

const editProduct = catchAsync(async (req, res, next) => {
  let { name, price, img } = req.body;
  let { id } = req.params;

  if (!name || !price || !img)
    return next(new AppError("Please provide all fields..."));

  const updatedProduct = await updateProduct(id, { name, price, img });

  res.status(201).json({
    success: true,
    data: updatedProduct,
  });
});

export default editProduct;
