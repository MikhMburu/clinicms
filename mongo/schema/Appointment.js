import {Schema, model} from "mongoose";

const appointmentSchema = new Schema({
  _apmtID: {
    type: Schema.Types.ObjectId,
    required: true,
  },
  patientID: {
    type: Schema.Types.ObjectId,
    ref: "person"
  }

},{timestamps: true});

const Appointment = model("appointment", appointmentSchema);
export default Appointment;