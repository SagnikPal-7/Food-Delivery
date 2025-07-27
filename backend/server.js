import express from "express";
import cors from "cors";
import { connectDB } from "./config/db.js";
import foodRouter from "./routes/foodRoute.js";
import userRouter from "./routes/userRoute.js";
import "dotenv/config.js";
import cartRouter from "./routes/cartRoute.js";
import orderRouter from "./routes/orderRoute.js";

//app config
const app = express();
const port = 4000;

app.use(
  cors({
    origin: [
      "https://food-delivery-admin-mauve.vercel.app",
      "https://food-delivery-wine-tau.vercel.app",
    ],
    credentials: true,
  })
);

// Explicitly set CORS headers for all responses
app.use((req, res, next) => {
  const allowedOrigins = [
    "https://food-delivery-admin-mauve.vercel.app",
    "https://food-delivery-wine-tau.vercel.app",
  ];
  const origin = req.headers.origin;
  if (allowedOrigins.includes(origin)) {
    res.header("Access-Control-Allow-Origin", origin);
  }
  res.header("Access-Control-Allow-Credentials", "true");
  res.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,OPTIONS");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  next();
});

// Handle preflight requests for all routes
app.options("*", cors());
//middleware
app.use(express.json());

//db connection
connectDB();

//api endpoints
app.use("/api/food", foodRouter);
app.use("/images", express.static("uploads"));
app.use("/api/user", userRouter);
app.use("/api/cart", cartRouter);
app.use("/api/order", orderRouter);

app.get("/", (req, res) => {
  res.send("API Working");
});

app.listen(port, () => {
  console.log(`Server Started on http://localhost:${port}`);
});

//mongodb+srv://sagnikp62:12022004@cluster0.r8wwfcn.mongodb.net/?
