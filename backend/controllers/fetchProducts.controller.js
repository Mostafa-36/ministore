import getAllProducts from "../services/getAllProducts.js";
import catchAsync from "../utils/catchAsync.js";

const fetchProducts = catchAsync(async (req, res, next) => {
  const fetchedProducts = await getAllProducts();

  res.status(200).json({
    success: true,
    result: fetchedProducts.length,
    data: fetchedProducts,
  });
});

export default fetchProducts;
