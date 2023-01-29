import { gql } from "@apollo/client";

export const DISPLAY_PEOPLE = gql`
  query GetPersons {
    getPersons {
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
