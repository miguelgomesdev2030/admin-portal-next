import React from "react";
import CustomDatePicker from "@/Common/CustomDatePicker";

const AvailabilityAndPricing = () => {
  return (
    <form className="theme-form mega-form">
      <h5>AVAILABILITY AND PRICING</h5>
      <div className="form-check form-switch">
        <input
          className="form-check-input"
          type="checkbox"
          role="switch"
          id="indefiniteAvailability"
        />
        <label className="form-check-label" htmlFor="indefiniteAvailability">
          Indefinite Availability
        </label>
      </div>
      <div className="row g-3">
        <div className="col-sm-6">
          <label className="form-label-title  ">Start Date</label>
          <CustomDatePicker />
        </div>
        <div className="col-sm-6">
          <label className="form-label-title  ">End Date</label>
          <CustomDatePicker />
        </div>
      </div>
      <br />
      <div className="mb-3">
        <label className="form-label-title ">Available Time Slots</label>
        {/* <TimeSlot /> */}
      </div>
      <div className="mb-3">
        <button
          className="btn btn-primary btn-block w-10"
          type="button"
          onClick={() => {
            console.log("clicked");
          }}
        >
          Add Time Slot
        </button>
      </div>
      <div className="mb-3">
        <div>
          <label className="form-label-title  ">Blackout Days</label>
        </div>
        <button
          className="btn btn-dark btn-block w-10"
          type="button"
          onClick={() => {
            console.log("clicked");
          }}
        >
          Add Blackout Day
        </button>
      </div>
      <div className="mb-3">
        <div>
          <label className="form-label-title  ">Exclusions</label>
        </div>
        <input
          type="text"
          placeholder="Enter exclusion"
          className="form-control mb-3"
        />
        <button
          className="btn btn-primary btn-block w-10"
          type="button"
          onClick={() => {
            console.log("clicked");
          }}
        >
          Add Exclusion
        </button>
      </div>
      <div className="mb-3">
        <div>
          <label className="form-label-title  ">Inclusions</label>
        </div>
        <input
          type="text"
          placeholder="Enter inclusion"
          className="form-control mb-3"
        />
        <button
          className="btn btn-primary btn-block w-10"
          type="button"
          onClick={() => {
            console.log("clicked");
          }}
        >
          Add Inclusion
        </button>
      </div>
    </form>
  );
};

export default AvailabilityAndPricing;
