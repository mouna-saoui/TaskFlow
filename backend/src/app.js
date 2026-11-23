import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import taskRoutes from "./routes/taskRoutes.js";

const app = express();

app.use(cors({ origin: process.env.FRONTEND_URL || "http://localhost:5173" }));
app.use(express.json());

app.use("/api/tasks", taskRoutes);

app.use((req, res) => res.status(404).json({ error: "Route not found" }));

export const connectDB = async () => {
  const uri = process.env.MONGO_URI || "mongodb://localhost:27017/taskflow";
  await mongoose.connect(uri);
  console.log("MongoDB connected");
};

export default app;
