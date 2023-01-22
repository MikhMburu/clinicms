import crypto from "crypto";
import bcrypt from "bcryptjs";
import moment from "moment";

export const make_appointment = (patient)=>{
  let appointment= {};

  appointment._apmtID = crypto.randomUUID();
  appointment.patientID = patient;
  appointment.checkin = moment().format('MMMM Do YYYY, h:mm:ss a')

  return appointment;
}

export const hashPassword = async (pswd) =>{
  const salt = await bcrypt.genSalt(10);
  const hashedpswd = await bcrypt.hash(pswd, salt);
  // console.log(hashedpswd);
  return hashedpswd;
}

// hashPassword("clinicms1234");
