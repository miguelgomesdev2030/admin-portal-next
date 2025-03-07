import CommonCardFooter from "@/Common/CommonCardFooter";
import React from "react";
import AnimateCheckBox from "./AnimateCheckBox";
import EditorsSimple from "@/Common/EditorsSimple";
import DropZoneCommon from "@/Common/DropZoneCommon";
// import WorldMap from "../Dashboard/WorldMap";
import dynamic from "next/dynamic";

const WorldMap = dynamic(() => import("../Dashboard/WorldMap"), {
  ssr: false,
});

interface TourData {
  tourName: string;
  shortDescription: string;
  generalDescription: string;
  durationHours: string;
  durationMinutes: string;
  whatToBring: string;
  knowBefore: string;
  questions: string;
  privateTour: boolean;
  meetingLocation: string;
}

interface TourDetailsProps {
  onInputChange: (field: string, value: string | boolean | File[]) => void;
  tourData: TourData;
}

const TourDetails: React.FC<TourDetailsProps> = ({
  onInputChange,
  tourData,
}) => {
  const handleFilesSelected = (files: File[]) => {
    onInputChange("uploadedFiles", files); // Store files in state
  };

  const [checkPlace, setCheckPlace] = React.useState(false);
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12">
          <div className="row">
            <div className="col-sm-12">
              <div className="card">
                <div className="card-header">
                  <h5>TOUR DETAILS</h5>
                </div>
                <div className="card-body">
                  <form className="theme-form mega-form">
                    <div className="row g-3">
                      <div className="col-sm-4">
                        <label className="form-label-title  ">Tour Name</label>
                        <input
                          type="text"
                          placeholder="Tour Name"
                          name="tour_name"
                          value={tourData.tourName}
                          className="form-control"
                          onChange={(e) =>
                            onInputChange("tourName", e.target.value)
                          }
                        />
                      </div>
                      <div className="col-sm-8">
                        <label className="form-label-title  ">
                          Short Description
                        </label>
                        <input
                          type="text"
                          placeholder="Short Description"
                          name="short_description"
                          value={tourData.shortDescription}
                          className="form-control"
                          onChange={(e) =>
                            onInputChange("shortDescription", e.target.value)
                          }
                        />
                      </div>
                    </div>
                    <br />
                    <div className="mb-3">
                      <label className="form-label-title ">
                        General Description
                      </label>
                      <textarea
                        className="form-control"
                        placeholder="Leave a comment here"
                        name="general_description"
                        value={tourData.generalDescription}
                        onChange={(e) =>
                          onInputChange("generalDescription", e.target.value)
                        }
                      ></textarea>
                    </div>
                    <div className="row g-3">
                      <div className="col-sm-6">
                        <label className="form-label-title  ">
                          Duration (Hours)
                        </label>
                        <select
                          name="duration_hours"
                          value={tourData.durationHours}
                          className="form-control js-example-basic-single col-sm-12"
                          onChange={(e) =>
                            onInputChange("durationHours", e.target.value)
                          }
                        >
                          {Array.from({ length: 25 }, (_, i) => (
                            <React.Fragment key={i}>
                              <option value={i}>{i}</option>
                            </React.Fragment>
                          ))}
                        </select>
                      </div>
                      <div className="col-sm-6">
                        <label className="form-label-title  ">
                          Duration (Minutes)
                        </label>
                        <select
                          name="duration_minutes"
                          value={tourData.durationMinutes}
                          className="form-control js-example-basic-single col-sm-12"
                          onChange={(e) =>
                            onInputChange("durationMinutes", e.target.value)
                          }
                        >
                          {Array.from({ length: 8 }, (_, i) => (
                            <React.Fragment key={i * 5}>
                              <option value={i * 5}>{i * 5}</option>
                            </React.Fragment>
                          ))}
                        </select>
                      </div>
                    </div>
                    <div className="mb-3">
                      <label className="form-label-title mt-4">
                        Upload Tour Image
                      </label>
                      <DropZoneCommon
                        onFilesSelected={handleFilesSelected}
                        multiple={false}
                      />
                    </div>
                    <div className="mb-3">
                      <label className="form-label-title ">What to Bring</label>
                      <textarea
                        className="form-control"
                        placeholder="Leave a comment here"
                        name="what_to_bring"
                        value={tourData.whatToBring}
                        onChange={(e) =>
                          onInputChange("whatToBring", e.target.value)
                        }
                      ></textarea>
                    </div>
                    <div className="mb-3">
                      <label className="form-label-title ">
                        Know Before You Go
                      </label>
                      <textarea
                        className="form-control"
                        placeholder="Leave a comment here"
                        name="know_before"
                        value={tourData.knowBefore}
                        onChange={(e) =>
                          onInputChange("knowBefore", e.target.value)
                        }
                      ></textarea>
                    </div>
                    <div className="mb-3">
                      <label className="form-label-title ">Questions</label>
                      <textarea
                        className="form-control"
                        placeholder="Leave a comment here"
                        name="questions"
                        value={tourData.questions}
                        onChange={(e) =>
                          onInputChange("questions", e.target.value)
                        }
                      ></textarea>
                    </div>
                    <div className="form-check form-switch">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        role="switch"
                        id="private_tour"
                        name="private_tour"
                        checked={tourData.privateTour}
                        onChange={(e) => {
                          onInputChange("privateTour", e.target.checked);
                          if (e.target.checked) {
                            onInputChange("meetingLocation", "");
                          }
                        }}
                      />
                      <label
                        className="form-check-label"
                        htmlFor="private_tour"
                      >
                        Private Tour
                      </label>
                    </div>
                    <div className="mb-3">
                      <label className="form-label-title  ">
                        Meeting Location
                      </label>
                      <input
                        type="text"
                        placeholder={
                          tourData.privateTour
                            ? "Provided by customer"
                            : "Enter a meeting location"
                        }
                        disabled={tourData.privateTour}
                        className="form-control"
                        name="meeting_location"
                        value={
                          tourData.privateTour ? "" : tourData.meetingLocation
                        }
                        onChange={(e) => {
                          onInputChange("meetingLocation", e.target.value);
                        }}
                      />
                    </div>
                    <div className="mb-3">
                      <label className="form-label-title  ">Itinerary</label>
                      <WorldMap checkPlace={checkPlace} />
                      <br />
                      <button
                        className="btn btn-primary btn-block w-10"
                        type="button"
                        onClick={() => {
                          setCheckPlace((pre) => !pre);
                        }}
                      >
                        {checkPlace ? "Click to Add Points" : "Add a point"}
                      </button>
                    </div>
                  </form>
                </div>
                {/* <CommonCardFooter /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TourDetails;
