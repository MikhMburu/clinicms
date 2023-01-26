const PersonForm = () => {
  return (
    <div className="col-lg-6 mt-1">
      <h3 className="text-center text-primary mb-0 pb-0 fw-bolder">
        Add/Search Patient
      </h3>
      <hr />
      <Form />
    </div>
  );
};

export const Form = () => {
  return (
    <form className="php-email-form">
      <fieldset>
        <legend>Patient Identification</legend>
        <div className="input-group mt-1">
          <span className=" input-group-text ">National/Passport ID</span>
          <input type="text" className="form-control" />
        </div>
        <div className="input-group mt-1">
          <span className="material-symbols-outlined input-group-text fs-3">
            person
          </span>
          <input type="text" className="form-control" placeholder="Surname" />
          <input
            type="text"
            className="form-control"
            placeholder="Other names"
          />
        </div>
        <div className="input-group mt-1">
          <span className=" input-group-text ">Sex</span>
          <select name="gender" className="form-select form-control">
            <option defaultValue="">Choose gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div className="input-group mt-1">
          <span className=" input-group-text ">Date Of Birth</span>
          <input type="date" className="form-control" />
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
          />
        </div>
      </fieldset>
      <fieldset>
        <legend>Roles</legend>
        <p className="text-muted">
          Select one or several of the roles. However, the person's UI will be
          that of the higher designation. The roles are listed in order of
          power.
        </p>
        <ul className="list-group">
          <li className="list-group-item">
            <input
              className="form-check-input me-1"
              type="checkbox"
              value=""
              id="firstCheckboxStretched"
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
        </ul>
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
              <a className="dropdown-item" href="#">
                <span className="material-symbols-outlined text-primary ">
                  person_add
                </span>
                &nbsp;Add Patient
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
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
export default PersonForm;
