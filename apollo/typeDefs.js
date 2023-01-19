// import {ApolloServer} from "@apollo/server";
// import {startStandaloneServer} from "@apollo/server/standalone";

const typeDefs = `#graphql
#Types 
  type Person  {
    natID: String  
    surname:  String 
    otherNames: String
    dob: String  
    gender: String  
    phoneno:String  
    email: String
    role: String
    password:  String
  }

  type Note {
    _noteID: ID!
    patientID: String!
    patient: Person!
  }

  type Appointment {
    _apmtID: ID!
    patientID: String!
    patient: Person!
  }

# Native
  type Query  {
    greet: String
    getNotes: [Note]
    getPersons: [Person]
    getAppointments: [Appointment]
  }

  
`;

export default typeDefs;
