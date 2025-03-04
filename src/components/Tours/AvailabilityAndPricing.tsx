import React from "react";
import CustomDatePicker from "@/Common/CustomDatePicker";
import TimeSlot from "@/Common/TimeSlot";
import { FaTrash } from "react-icons/fa";

interface AvailabilityAndPricingProps {
  onInputChange: (field: string, value: any) => void;
  tourData: {
    indefiniteAvailability: boolean;
    startDate: string;
    endDate: string;
    timeSlots: {
      time: string;
      day_of_week: string;
      specific_date: string;
    }[];
  };
  addTimeSlot: () => void;
  updateTimeSlot: (index: number, date: Date) => void;
  removeTimeSlot: (index: number) => void;
}

const AvailabilityAndPricing: React.FC<AvailabilityAndPricingProps> = ({
  onInputChange,
  tourData,
  addTimeSlot,
  updateTimeSlot,
  removeTimeSlot,
}) => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12">
          <div className="row">
            <div className="col-sm-12">
              <div className="card">
                <div className="card-header">
                  <h5>AVAILABILITY AND PRICING</h5>
                </div>
                <div className="card-body">
                  <form className="theme-form mega-form">
                    <div className="form-check form-switch">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        role="switch"
                        id="indefinite_availability"
                        name="indefinite_availability"
                        checked={tourData.indefiniteAvailability}
                        onChange={(e) =>
                          onInputChange(
                            "indefiniteAvailability",
                            e.target.checked
                          )
                        }
                      />
                      <label
                        className="form-check-label"
                        htmlFor="indefinite_availability"
                      >
                        Indefinite Availability
                      </label>
                    </div>
                    <div className="row g-3">
                      <div className="col-sm-6">
                        <label className="form-label-title">Start Date</label>
                        <CustomDatePicker
                          disabled={tourData.indefiniteAvailability}
                          date={new Date(tourData.startDate)}
                          onChange={(date) =>
                            onInputChange(
                              "startDate",
                              date ? date.toISOString().split("T")[0] : ""
                            )
                          }
                        />
                      </div>
                      <div className="col-sm-6">
                        <label className="form-label-title">End Date</label>
                        <CustomDatePicker
                          minDate={new Date(tourData.startDate)}
                          disabled={tourData.indefiniteAvailability}
                          date={new Date(tourData.endDate)}
                          onChange={(date) =>
                            onInputChange(
                              "endDate",
                              date ? date.toISOString().split("T")[0] : ""
                            )
                          }
                        />
                      </div>
                    </div>
                    <br />
                    <div className="mb-3">
                      <label className="form-label-title ">
                        Available Time Slots
                      </label>
                      <div className="row g-3">
                        {tourData.timeSlots.map((time, index) => (
                          <div
                            className="col-lg-6 col-md-6 col-sm-12 d-flex align-items-center gap-2"
                            key={index}
                          >
                            <TimeSlot
                              value={time.specific_date + " " + time.time}
                              minDate={new Date(tourData.startDate)}
                              maxDate={
                                tourData.indefiniteAvailability
                                  ? new Date("2026-12-31")
                                  : new Date(tourData.endDate)
                              }
                              onChange={(date) => updateTimeSlot(index, date)}
                            />
                            <button
                              style={{
                                background: "none",
                                border: "none",
                                cursor: "pointer",
                              }}
                              type="button"
                              onClick={() => removeTimeSlot(index)}
                            >
                              <FaTrash color={"red"} size={20} />
                            </button>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="mb-3">
                      <button
                        className="btn btn-primary btn-block w-10"
                        type="button"
                        onClick={addTimeSlot}
                      >
                        Add Time Slot
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AvailabilityAndPricing;
