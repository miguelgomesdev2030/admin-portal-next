import React from "react";
import DropZoneCommon from "@/Common/DropZoneCommon";

const PictureInsertion = () => {
  return (
    <div className="card-body">
      <form className="theme-form mega-form">
        <div className="mb-3">
          <label className="form-label-title  ">Image</label>
          <DropZoneCommon
            onFilesSelected={() => console.log("DropZoneCommon")}
          />
        </div>
      </form>
    </div>
  );
};

export default PictureInsertion;
