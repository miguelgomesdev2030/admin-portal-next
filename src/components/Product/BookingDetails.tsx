import React from "react";
import DropZoneCommon from "@/Common/DropZoneCommon";

const BookingDetails = () => {
  return (
    <div className="card-body">
      <form className="theme-form mega-form">
        <div className="mb-3">
          <label className="form-label-title ">What to Bring</label>
          <textarea
            className="form-control"
            placeholder="Leave a comment here"
            id="floatingTextarea"
          ></textarea>
        </div>
        <div className="mb-3">
          <label className="form-label-title ">Know Before You Go</label>
          <textarea
            className="form-control"
            placeholder="Leave a comment here"
            id="floatingTextarea"
          ></textarea>
        </div>
        <div className="mb-3">
          <label className="form-label-title ">Questions</label>
          <textarea
            className="form-control"
            placeholder="Leave a comment here"
            id="floatingTextarea"
          ></textarea>
        </div>
        <div className="form-check form-switch">
          <input
            className="form-check-input"
            type="checkbox"
            role="switch"
            id="flexSwitchCheckDefault"
          />
          <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
            Is each additional passenger's name required?
          </label>
        </div>
        <div className="form-check form-switch">
          <input
            className="form-check-input"
            type="checkbox"
            role="switch"
            id="flexSwitchCheckDefault"
          />
          <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
            Is each additional passenger's email required?
          </label>
        </div>
        <div className="form-check form-switch mb-3">
          <input
            className="form-check-input"
            type="checkbox"
            role="switch"
            id="flexSwitchCheckDefault"
          />
          <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
            Is each additional passenger's date of birth required?
          </label>
        </div>
        <button
          className="btn btn-primary btn-block w-10"
          type="button"
          onClick={() => {
            console.log("clicked");
          }}
        >
          Save Tour
        </button>
      </form>
    </div>
  );
};

export default BookingDetails;
