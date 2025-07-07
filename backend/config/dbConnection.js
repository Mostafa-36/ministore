import mongoose from "mongoose";

const db_URI =
  process.env.MONGODB_URI ||
  "mongodb+srv://dlyahmdmstfy:lZmNHMHUsCXm9Qal@cluster0.5tagg6w.mongodb.net/products?retryWrites=true&w=majority&appName=Cluster0";

const connection = async () => {
  try {
    const conn = await mongoose.connect(db_URI);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};
export default connection;
