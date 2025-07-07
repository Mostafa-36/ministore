import Product from "../models/Product.model.js";

const createNewProduct = async (productBody) => {
  console.log(productBody);
  const product = await Product.create(productBody);
  return product;
};

export default createNewProduct;
