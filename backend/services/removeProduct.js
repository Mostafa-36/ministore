import Product from "../models/Product.model.js";

const removeProduct = async (productId) => {
  await Product.findByIdAndDelete(productId);
  return null;
};
export default removeProduct;
