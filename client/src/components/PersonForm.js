// Imports
//   Packages
import {useState} from "react"
import {useMutation} from "@apollo/client";
//   Functions
import {ADD_PERSON} from "../apollo-schema/mutation"
//   Components

const PersonForm = () => {
  return (
    <FormContainer>
      <Form />
    </FormContainer>    
  );
};

export const Form = () => {
  const [info, setInfo] = useState(null);
  const [addPerson,{data, loading}]= useMutation(ADD_PERSON)

  const onChange = e =>{
    setInfo({...info, [e.target.name]: e.target.value});
  }
  const onSubmit = e =>{
    addPerson({variables:{input:info}})
    if(!loading && data) console.log(data)
    
  }
  return (
    <form className="php-email-form">
      <fieldset>
        <legend>Patient Identification</legend>
        <div className="input-group mt-1">
          <span className=" input-group-text ">National/Passport ID</span>
          <input type="text" className="form-control" name="natID" onChange={onChange}/>
        </div>
        <div className="input-group mt-1">
          <span className="material-symbols-outlined input-group-text fs-3">
            person
          </span>
          <input type="text" className="form-control" placeholder="Surname" name="surname" onChange={onChange}/>
          <input
            type="text"
            className="form-control"
            placeholder="Other names"
            name="otherNames"
            onChange={onChange}
          />
        </div>
        <div className="input-group mt-1">
          <span className=" input-group-text ">Sex</span>
          <select name="gender" className="form-select form-control" onChange={onChange}>
            <option defaultValue="">Choose gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div className="input-group mt-1">
          <span className=" input-group-text ">Date Of Birth</span>
          <input type="date" className="form-control" name="dob"onChange={onChange}/>
        </div>
      </fieldset>
      <fieldset>
        <legend>Contact Details</legend>
        <div className="input-group mt-1">
          <span className="material-symbols-outlined input-group-text fs-3">
            mail
          </span>
          <input
            type="email"
            className="form-control"
            placeholder="Your email"
            name="email"
            onChange={onChange}
          />
        </div>
        <div className="input-group mt-1">
          <span className="material-symbols-outlined input-group-text fs-3">
            call
          </span>
          <input
            type="tel"
            placeholder="Your phone number"
            className="form-control"
            name="phoneno"
            onChange={onChange}
          />
        </div>
      </fieldset>
      <fieldset>
        <legend>Roles</legend>
        <p className="text-muted">
          The roles below are arranged in order of privilege, with "Admin" being the most powerful. The pages displayed will be different.
        </p>
        <select className="form-select" name="role" onChange={onChange}>
          <option defaultValue={true} disabled>Select Role</option>
          <option value="Admin">Administrator</option>
          <option value="Doctor">Doctor</option>
          <option value="Receptionist">Receptionist</option>
        </select>
        {/* <ul className="list-group">
          <li className="list-group-item">
            <input
              className="form-check-input me-1"
              type="checkbox"
              value=""
              name=""
            />
            <label
              className="form-check-label stretched-link"
              htmlFor="firstCheckboxStretched"
            >
              Admin
            </label>
          </li>
          <li className="list-group-item">
            <input
              className="form-check-input me-1"
              type="checkbox"
              value=""
              id="secondCheckboxStretched"
            />
            <label
              className="form-check-label stretched-link"
              htmlFor="secondCheckboxStretched"
            >
              Doctor
            </label>
          </li>
          <li className="list-group-item">
            <input
              className="form-check-input me-1"
              type="checkbox"
              value=""
              id="thirdCheckboxStretched"
            />
            <label
              className="form-check-label stretched-link"
              htmlFor="thirdCheckboxStretched"
            >
              Receptionist
            </label>
          </li>
        </ul> */}
      </fieldset>
      <div className="row mt-3">
        <div className="dropdown col-md-6 mx-auto">
          <button
            className="btn btn-outline-dark dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Select Action
          </button>
          <ul className="dropdown-menu">
            <li>
              <span className="dropdown-item" role="button" type="submit" onClick={onSubmit}>
                <i className="material-symbols-outlined text-primary ">
                  person_add
                </i>
                &nbsp;Add Patient
              </span>
            </li>
            <li>
              <a className="dropdown-item" href="!#">
                <span className="material-symbols-outlined text-danger">
                  person_search
                </span>
                &nbsp;Search Patient
              </a>
            </li>
          </ul>
        </div>
      </div>
    </form>
  );
};

const FormContainer = ({children}) =>{
  return (
    <div className="col-lg-6 mt-1">
      <h3 className="text-center text-primary mb-0 pb-0 fw-bolder">
        Add/Search Patient
      </h3>
      <hr />
      {children}
    </div>
  )
}
export default PersonForm;

