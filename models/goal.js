const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const goalSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },

    description: {
      type: String,
      required: true,
    },
    progress: {
      type: Number,
      default: 0,
      min: 0,
      max: 100,
      required: true,
    },
  },
  { timestamps: true }
);

//this means every GOAL that would be created should attribute the goalSchema
const GOAL = mongoose.model("Goal", goalSchema);
module.exports = GOAL;
