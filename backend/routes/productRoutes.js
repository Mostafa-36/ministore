import express from "express";
import editProduct from "../controllers/editProduct.controller.js";
import deleteProduct from "../controllers/deleteProduct.controller.js";
import createProduct from "../controllers/createProduct.controller.js";
import fetchProducts from "../controllers/fetchProducts.controller.js";

const router = express.Router();

router.route("/").get(fetchProducts).post(createProduct);
router.route("/:id").patch(editProduct).delete(deleteProduct);

export default router;
