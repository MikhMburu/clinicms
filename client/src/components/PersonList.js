// Import
//   Packages
import {useEffect} from "react";
import {useQuery, useMutation} from "@apollo/client";
//   Files and Functions
import {DISPLAY_PEOPLE} from "../apollo-schema/query"
import {MAKE_APPOINTMENT} from "../apollo-schema/mutation";
//   Components
const PersonList = () => {
  const {data, error, loading} = useQuery(DISPLAY_PEOPLE);
  return (
    <div className="col-lg-6 mt-1 testimonials">
      {data && data.getPersons.map(person=><PersonItem key={person._id} details={person}/>)}
      {/* <PersonItem/>
      <PersonItem/>
      <PersonItem/>
      <PersonItem/>
      <PersonItem/> */}
    </div>
  );
};

export const PersonItem = ({details:{otherNames, phoneno, email, _id}})=>{
  const [makeAppointment,{data, loading, error}]= useMutation(MAKE_APPOINTMENT);
  
  return (
    <div className="testimonial-item border-bottom mb-1">
        <h3>{otherNames}</h3>
        <h4>{phoneno}</h4>
        <p>{email}</p>
        <button className="btn btn-outline-dark mb-0" onClick={()=>makeAppointment({variables:{makeAppointmentId: _id}})}>Add to queue</button>
      </div>
  )
}

export default PersonList;
