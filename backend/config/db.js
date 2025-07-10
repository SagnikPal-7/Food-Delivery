import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose
    .connect("mongodb+srv://sagnikp62:02122004@cluster0.0kydae0.mongodb.net")
    .then(() => console.log("DB Connected"));
};
