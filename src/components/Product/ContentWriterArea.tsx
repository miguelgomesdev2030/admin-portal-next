import React from "react";

const ContentWriterArea = () => {
  return (
    <div className="card-body">
      <form className="theme-form mega-form">
        <div className="mb-3">
          <label className="form-label-title  ">
            Please review the Rundown Details:
          </label>
        </div>
        <div className="row g-3 mb-3">
          <div className="col-sm-4">
            <label className="form-label-title  ">Title</label>
            <input
              type="text"
              placeholder="Enter Title"
              className="form-control"
              disabled
            />
          </div>
          <div className="col-sm-4">
            <label className="form-label-title  ">Duration (Hours)</label>
            <input
              type="text"
              placeholder="Enter duration in hours"
              className="form-control"
              disabled
            />
          </div>
        </div>
        <div className="mb-3">
          <label className="form-label-title ">Description</label>
          <textarea
            className="form-control"
            placeholder="Provide the rundown description..."
            id="floatingTextarea"
            disabled
          ></textarea>
        </div>
      </form>
    </div>
  );
};

export default ContentWriterArea;
