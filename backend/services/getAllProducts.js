import Product from "../models/Product.model.js";

const getAllProducts = async () => {
  const fetchedProducts = await Product.find({});
  return fetchedProducts;
};

export default getAllProducts;
