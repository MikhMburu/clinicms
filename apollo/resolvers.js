// Import libraries
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { GraphQLError } from "graphql";
// Import files and functions
import Person from "../mongo/schema/Person.js";
import Notes from "../mongo/schema/Notes.js";
import { mongoURI, testURI, secret } from "../config/index.js";
import db from "../mongo/db.js";
import { make_appointment, hashPassword } from "../utilities/func.js";
import {isEmpty} from "../utilities/isEmpty.js";


// Define/Initialize functions
db(mongoURI);
// Create array of objects to store appointments
let appointmts = [];

const resolvers = {
  Person: {
    history: async (parent) => {
      try {
        const res = await Notes.find({ patientID: parent._id });
        return res;
      } catch (err) {
        console.log("Unable to retrieve persons");
        throw err;
      }
    },
  },
  Note: {
    patient: async (parent, args) => {
      try {
        const res = await Person.findById(parent.patientID);
        return res;
      } catch (err) {
        console.log("Unable to retrieve data");
        throw err;
      }
    },
  },
  Appointment: {
    patient: async (parent, args) => {
      try {
        const res = await Person.findById(parent.patientID);
        return res;
      } catch (err) {
        console.log("Unable to retrieve data");
        throw err;
      }
    },
  },
  Query: {
    getPersons: async (_, args) => {
      try {
        const res = await Person.find();
        return res;
      } catch (err) {
        console.log("Unable to retrieve data");
        throw err;
      }
    },
    getNotes: async (_, args) => {
      try {
        const res = await Notes.find();
        return res;
      } catch (err) {
        console.log("Unable to retrieve data");
        throw err;
      }
    },
    getAppointments: () => appointmts,
    getOneAppointment: (_,args)=>{
      const {id}= args;
      const appointment = appointmts.filter(apt=>apt._apmtID === id);

      return appointment[0]
    }
  },
  Mutation: {
    makeAppointment: (_, args) => {
      try {
        let patient = make_appointment(args.id);
        appointmts.push(patient);
  
        return patient;
        
      } catch (err) {
        console.log("Unable to make appointment\n", err)
      }
    },
    deleteAppointment: (_, args)=>{
      const {id} = args;

      appointmts = appointmts.filter(apmt => apmt._apmtID !== id)
      return appointmts;
    },
    addPerson: async (_, args) => {
      const {
        natID,
        surname,
        otherNames,
        dob,
        gender,
        phoneno,
        email,
        role,
        password,
      } = args.input;

      try {
        let newPerson;
        let pswd = password || "clinicms1234"
          const hashedPswd = await hashPassword(pswd);
          newPerson = new Person({
            natID,
            surname,
            otherNames,
            dob,
            gender,
            phoneno,
            email,
            role,
            password: hashedPswd,
          });
        
        
        const res = await newPerson.save();
        return res;
      } catch (err) {
        console.log("Internal server error\n", err);
        throw new GraphQLError(
          "Unable to create person in database",
          "DATABASE_ERROR"
        );
      }
    },
    login: async (_, args) => {
      const { email, password } = args.input;

      // Get login details
      try {
        // Compare bcrypt passwords
        const res = await Person.findOne({ email });
        const isMatch = await bcrypt.compare(password, res.password);
        // If login details correct, create token
        if (!isMatch) {
          return "Password incorrect";
        }
        const token = jwt.sign(
          {
            natID: res.natID,
            surname: res.surname,
            otherNames: res.otherNames,
            role: res.role,
          },
          secret,
          {
            expiresIn: "8h",
          }
        );
        return token;
      } catch (err) {
        console.log("Internal server error.");
        throw new GraphQLError("Unable to log you in", "LOGIN_ERROR");
      }
    },
  },
};

export default resolvers;
