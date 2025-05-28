import mongoose, { Schema, Document } from "mongoose";

export interface IStory extends Document {
  title: string;
  content: string;
  authorId: mongoose.Types.ObjectId;
  createdAt: Date;
  updatedAt: Date;
}

const StorySchema: Schema = new Schema(
  {
    title: { type: String, required: true },
    content: { type: String, required: true },
    authorId: { type: mongoose.Types.ObjectId, ref: "User", required: true },
  },
  { timestamps: true }
);

export const Story = mongoose.model<IStory>("Story", StorySchema);
