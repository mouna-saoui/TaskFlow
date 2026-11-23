import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
  title:     { type: String, required: true, trim: true },
  completed: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now },
});

// Return plain _id as id in JSON responses
taskSchema.set("toJSON", {
  transform: (_, ret) => {
    ret.id = ret._id.toString();
    delete ret._id;
    delete ret.__v;
    return ret;
  },
});

export default mongoose.model("Task", taskSchema);
