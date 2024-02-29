import { Document, Schema, model, models } from "mongoose";

export interface IJam extends Document {
  _id: string;
  title: string;
  desc?: string;
  createdAt: Date;
  imageUrl: string;
  startDateTime: Date;
  endDateTime: Date;
  isFree: boolean;
  url?: string;
  organizer: { _id: string; username: string };
}

const JamSchema = new Schema({
  title: { type: String, required: true },
  desc: { type: String },
  createdAt: { type: Date, default: Date.now },
  imageUrl: { type: String, required: true },
  startDateTime: { type: Date, default: Date.now },
  endDateTime: { type: Date, default: Date.now },
  isFree: { type: Boolean, default: true },
  url: { type: String },
  organizer: { type: Schema.Types.ObjectId, ref: "User" },
});

const Jam = models.Jam || model("Jam", JamSchema);

export default Jam;
