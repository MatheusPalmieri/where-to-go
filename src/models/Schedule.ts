import { softDeletePlugin } from "@/lib/softDelete";
import mongoose, { Document, Schema } from "mongoose";

export interface ISchedule extends Document {
  name: string;
  description: string;
  isDeleted: boolean;
  softDelete: () => Promise<void>;
  restore: () => Promise<void>;
}

const ScheduleSchema = new Schema<ISchedule>(
  {
    name: { type: String, required: true, unique: true },
    description: { type: String, required: true },
    isDeleted: { type: Boolean, default: false },
  },
  {
    timestamps: true,
  }
);

ScheduleSchema.plugin(softDeletePlugin);

export default mongoose.models.Schedule ||
  mongoose.model<ISchedule>("Schedule", ScheduleSchema);
