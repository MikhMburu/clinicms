
const typeDefs = `#graphql
#Types 
  type Person  {
    _id: ID
    natID: String  
    surname:  String 
    otherNames: String
    dob: String  
    gender: String  
    phoneno:String  
    email: String
    role: String
    password: String
    history: [Note]
  }
  type Note {
    _noteID: ID!
    patientID: String!
    patient: Person!
  }
  type Appointment {
    _apmtID: ID!
    patientID: String!
    patient: Person
    checkin: String
  }
# Input
  input PersonInput {
    natID: String  
    surname:  String 
    otherNames: String
    dob: String  
    gender: String  
    phoneno:String  
    email: String
    role: String
    password: String  
  }

  input LoginInput {
    email: String!
    password: String!
  }

# Native
  type Query  {
    greet: String
    getNotes: [Note]
    getPersons: [Person]
    getAppointments: [Appointment]
  }
  type Mutation {
    login(input: LoginInput): String!
    addPerson(input: PersonInput): Person
    makeAppointment(id: String): Appointment
  }
  
`;

export default typeDefs;
