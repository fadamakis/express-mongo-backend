import mongoose from "mongoose";

const ListsSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
});

export default mongoose.model("Lists", ListsSchema);