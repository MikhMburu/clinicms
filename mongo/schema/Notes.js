import {Schema, model} from "mongoose";

const notesSchema = new Schema({
  _noteID: {
    type: Schema.Types.ObjectId,
  },
  patientID: {
    type: Schema.Types.ObjectId,
    ref: "person"
  },
  desc: {
    type: Schema.Types.Mixed,
  }
}, {timestamps: true})

const Notes  = model("notes", notesSchema);
export default Notes;