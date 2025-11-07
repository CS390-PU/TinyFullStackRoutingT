import express from "express";
import Demo from "../models/demo.js";

const router = express.Router();

router.get("/", async (req, res) => {
  const doc = await Demo.findOne();
  res.json(doc || { message: "no data" });
});

export default router;
