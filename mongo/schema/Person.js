import {Schema, model} from "mongoose";

const personSchema = new Schema({
  natID: {
    type: String,
  },
  surname: {
    type: String    
  },
  otherNames: {
    type: String,
  },
  dob:{
    type: Date,    
  },
  gender: {
    type: String,
  },
  phoneno: {
    type: String,
  },
  email:{
    type: String,
  },
  role: {
    type: String,
  },
  password: {
    type: String,    
    // clinicms1234 - password
  }
},{timestamps: true})

const Person = model("person", personSchema);
export default Person;