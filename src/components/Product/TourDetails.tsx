import React from "react";
import WorldMap from "../Dashboard/WorldMap";

const TourDetails = () => {
  return (
    <div className="card-body">
      <form className="theme-form mega-form">
        <div className="row g-3">
          <div className="col-sm-6">
            <label className="form-label-title  ">Tour Name</label>
            <input
              type="text"
              placeholder="Tour Name"
              className="form-control"
            />
          </div>
          <div className="col-sm-6">
            <label className="form-label-title  ">Tour Location</label>
            <select className="form-control js-example-basic-single col-sm-12">
              {Array.from({ length: 25 }, (_, i) => (
                <React.Fragment key={i}>
                  <option value={i}>{i}</option>
                </React.Fragment>
              ))}
            </select>
          </div>
        </div>
        <br />
        <div className="mb-3">
          <label className="form-label-title ">Rundown Details</label>
          <div className="card-body b-primary rounded mb-3">
            <div className="row g-3">
              <div className="col-sm-4">
                <label className="form-label-title  ">Tour Name</label>
                <input
                  type="text"
                  placeholder="Tour Name"
                  className="form-control"
                />
              </div>
              <div className="col-sm-6">
                <label className="form-label-title  ">Tour Location</label>
                <select className="form-control js-example-basic-single col-sm-12">
                  {Array.from({ length: 25 }, (_, i) => (
                    <React.Fragment key={i}>
                      <option value={i}>{i}</option>
                    </React.Fragment>
                  ))}
                </select>
              </div>
            </div>
            <div className="mb-3">
              <label className="form-label-title ">Description</label>
              <textarea
                className="form-control"
                placeholder="Provide the rundown description..."
                id="floatingTextarea"
              ></textarea>
            </div>
          </div>
          <div className="mb-3">
            <button className="btn btn-primary">Add Rundown Detail</button>
          </div>
        </div>
        <div className="mb-3">
          <div className="col-sm-4">
            <label className="form-label-title  ">Maximum Capacity</label>
            <input
              type="number"
              min={0}
              placeholder="Maximum number of people per tour date"
              className="form-control"
            />
          </div>
        </div>
        <div className="mb-3">
          <label className="form-label-title  ">
            <strong>Tour Type:</strong>
          </label>
          <div className="form-check form-switch">
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
            />
            <label
              className="form-check-label"
              htmlFor="flexSwitchCheckDefault"
            >
              Private Tour
            </label>
          </div>
        </div>
        <div className="mb-3">
          <label className="form-label-title  ">Meeting Location</label>
          <input
            type="text"
            placeholder="Enter a meeting location"
            className="form-control"
          />
        </div>
        <div className="row g-3 mb-3">
          <div className="col-sm-6">
            <label className="form-label-title  ">Duration (Hours)</label>
            <select className="form-control js-example-basic-single col-sm-12">
              {Array.from({ length: 25 }, (_, i) => (
                <React.Fragment key={i}>
                  <option value={i}>{i}</option>
                </React.Fragment>
              ))}
            </select>
          </div>
          <div className="col-sm-6">
            <label className="form-label-title  ">Duration (Minutes)</label>
            <select className="form-control js-example-basic-single col-sm-12">
              {Array.from({ length: 8 }, (_, i) => (
                <React.Fragment key={i * 5}>
                  <option value={i * 5}>{i * 5}</option>
                </React.Fragment>
              ))}
            </select>
          </div>
        </div>
        <div className="mb-3">
          <label className="form-label-title  ">Itinerary</label>
          {/* <WorldMap /> */}
          <br />
          <button
            className="btn btn-primary btn-block w-10"
            type="button"
            onClick={() => {
              console.log("clicked");
            }}
          >
            Add Points
          </button>
        </div>
      </form>
    </div>
  );
};

export default TourDetails;
