// Import libraries
import bcrypt from "bcryptjs";
// Import files and functions
import Person from "../mongo/schema/Person.js";
import Notes from "../mongo/schema/Notes.js";
import Appointment from "../mongo/schema/Appointment.js";
import {mongoURI, testURI, secret} from "../config/index.js"
import db  from "../mongo/db.js";

// Define/Initialize functions
db(mongoURI);

const resolvers = {
  Note:{
    patient: async (parent, args)=>{
      try {
        const res = await Person.findById(parent.patientID)
        return res
      } catch (err) {
        console.log("Unable to retrieve data")
        throw err
      }
    }
  },
  Appointment: {
    patient: async (parent, args)=>{
      try {
        const res = await Person.findById(parent.patientID)
        return res
      } catch (err) {
        console.log("Unable to retrieve data")
        throw err
      }
    }
  },
  Query:{
    greet: ()=>"Hello..This is clinicms" ,
    getPersons: async(_, args)=>{
      try {
        const res = await Person.find()
        return res;
      } catch (err) {
        console.log("Unable to retrieve data")
        throw err
      }
    },
    getNotes: async(_, args)=>{
      try {
        const res = await Notes.find()
        return res;
      } catch (err) {
        console.log("Unable to retrieve data")
        throw err
      }
    },
    getAppointments: async(_, args)=>{
      try {
        const res = await Appointment.find()
        return res;
      } catch (err) {
        console.log("Unable to retrieve data")
        throw err
      }
    }
  }
}

export default resolvers;