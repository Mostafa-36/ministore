import Product from "../models/Product.model.js";

const updateProduct = async (productId, productBody) => {
  const updatedProduct = await Product.findByIdAndUpdate(
    productId,
    productBody,
    { new: true }
  );

  return updatedProduct;
};

export default updateProduct;
