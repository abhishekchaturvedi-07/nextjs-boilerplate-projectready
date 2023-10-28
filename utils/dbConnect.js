import mongoose from "mongoose";

const dbConnect = async () => {
  if (mongoose.connection.readyState >= 1) {
    return;
  }
  mongoose.connect(process.env.DB_URL);
  //   console.log("connected", connectionCheck);
};

export default dbConnect;
