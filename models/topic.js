import mongoose, { Schema } from "mongoose";

const topicSchema = new Schema(
  {
    name: String,
    age: String,
    gender: String,
    ipNumber: String,
    preOpExamVideo: String,
    preOpInvestigation: String,
    diagnosis: String,
    procedure: String,
    intraOpVideo: String,
    postOpFollowUp: String,
  },
  {
    timestamps: true,
  }
);

const Topic = mongoose.models.Topic || mongoose.model("Topic", topicSchema);

export default Topic;
