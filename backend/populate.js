import mongoose from "mongoose";
import Demo from "./models/demo.js";

const mongoDB =
  process.env.MONGO_URI ||
  (process.env.CODESPACES
    ? "mongodb://db:27017/tiny_demo"
    : "mongodb://127.0.0.1:27017/tiny_demo");

console.log("Connecting to", mongoDB);

mongoose.connect(mongoDB).then(async () => {
  await Demo.deleteMany({});
  await Demo.create({ message: "Hello from MongoDB!" });
  console.log("Seed complete.");
  process.exit(0);
});
