import removeProduct from "../services/removeProduct.js";
import catchAsync from "../utils/catchAsync.js";

const deleteProduct = catchAsync(async (req, res, next) => {
  const { id } = req.params;
  await removeProduct(id);

  res.status(204).json({
    success: true,
    data: null,
  });
});

export default deleteProduct;
