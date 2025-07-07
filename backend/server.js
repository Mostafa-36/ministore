import dotenv from "dotenv";
dotenv.config();

import express from "express";
import path from "path";

import dbConnection from "./config/dbConnection.js";
import cors from "cors";
import globalErrorHandler from "./controllers/error.controller.js";
import productRoutes from "./routes/productRoutes.js";

process.on("uncaughtException", (err) => {
  console.log("UNCAUGHTEXCEPTION");
  console.log(err.name, err.message, err);
  process.exit(1);
});

const app = express();
const __direname = path.resolve();

app.use(cors());
app.use(express.json());

const port = process.env.PORT || 5000;

const server = app.listen(port, () =>
  console.log("Server starts at http://localhost:" + process.env.PORT)
);

dbConnection();
app.use("/api/products", productRoutes);

app.use(globalErrorHandler);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__direname, "/frontend/dist")));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__direname, "frontend", "dist", "index.html"));
  });
}

process.on("unhandledRejection", (err) => {
  console.log("UNHANDLED REJECTION: shuting down...");
  console.log(err.name, err.message);

  server.close(() => {
    process.exit(1);
  });
});
