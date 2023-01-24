import React from "react";

const PatientDetails = () => {
  return (
    <div className="col-md-4">
      <h6 className="fw-bolder text-danger text-uppercase mb-1">
        Patient Details
      </h6>
      <hr />
      <h5 className="display-6">Michael Mburu</h5>
      <h4 className="fw-bold">#24552304</h4>
      <h5>
        <span className="text-primary">Gender:&nbsp;</span>Male
      </h5>
      <h5>
        <span className="text-primary">DOB:&nbsp;</span> 20th June, 1986
      </h5>
      <h5>
        <span className="text-primary">Email&nbsp;</span> mikhmburu@live.com
      </h5>
      <h5>
        <span className="text-primary">Phone&nbsp;</span> 0734506809
      </h5>
      <select name="hist" className="form-select">
        <option selected>Patient History</option>
        <option>14th June 2007</option>
        <option>17th August 2009</option>
        <option>28th Februry 2012</option>
      </select>
    </div>
  );
};

export default PatientDetails;
