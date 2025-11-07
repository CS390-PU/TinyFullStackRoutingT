import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import demoRoutes from "./routes/demo.js";

const app = express();
app.use(cors());
app.use(express.json());

const mongoDB =
  process.env.MONGO_URI ||
  (process.env.CODESPACES
    ? "mongodb://db:27017/tiny_demo"
    : "mongodb://127.0.0.1:27017/tiny_demo");

mongoose
  .connect(mongoDB)
  .then(() => console.log("✅ MongoDB connected:", mongoDB))
  .catch((err) =>
    console.error("❌ MongoDB connection error:", err?.message || err)
  );

app.get("/", (req, res) => {
  res.send("Tiny backend running");
});

// ✅ demo route
app.use("/demo", demoRoutes);

export default app;
