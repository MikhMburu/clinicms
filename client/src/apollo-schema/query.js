import { gql } from "@apollo/client";

export const displayPeople = gql`
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
