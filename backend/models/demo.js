import mongoose from "mongoose";

const DemoSchema = new mongoose.Schema({
  message: { type: String, required: true }
});

export default mongoose.model("Demo", DemoSchema);
