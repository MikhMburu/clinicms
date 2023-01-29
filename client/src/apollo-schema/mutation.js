import { gql } from "@apollo/client";

export const ADD_PERSON = gql`
  mutation AddPerson($input: PersonInput) {
    addPerson(input: $input) {
      _id
      natID
      surname
      otherNames
      dob
      gender
      phoneno
      email
      role
      password
    }
  }
`;
export const LOGIN = gql`
  mutation Login($input: LoginInput) {
    login(input: $input)
  }
`;

export const MAKE_APPOINTMENT = gql`
  mutation MakeAppointment($makeAppointmentId: String) {
    makeAppointment(id: $makeAppointmentId) {
      _apmtID      
      patient {
        dob
        gender
        otherNames
        surname
        phoneno
        natID
        _id
      }
      checkin
    }
  }
`;
