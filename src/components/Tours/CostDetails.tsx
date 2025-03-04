import CommonCardFooter from "@/Common/CommonCardFooter";
import React from "react";
import AnimateCheckBox from "./AnimateCheckBox";
import EditorsSimple from "@/Common/EditorsSimple";
import DropZoneCommon from "@/Common/DropZoneCommon";
import WorldMap from "../Dashboard/WorldMap";
import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import CustomDatePicker from "@/Common/CustomDatePicker";
import Time from "react-datepicker/dist/time";
import TimeSlot from "@/Common/TimeSlot";

interface TourData {
  guideRate: string;
  ticketCost: string;
  vehicleCost: string;
}

interface CostDetailsProps {
  onInputChange: (field: string, value: string) => void;
  tourData: TourData;
}

const CostDetails: React.FC<CostDetailsProps> = ({
  onInputChange,
  tourData,
}) => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12">
          <div className="row">
            <div className="col-sm-12">
              <div className="card">
                <div className="card-header">
                  <h5>COST DETAILS</h5>
                </div>
                <div className="card-body">
                  <form className="theme-form mega-form">
                    <div className="row g-3">
                      <div className="col-sm-4">
                        <label className="form-label-title  ">
                          Guide Rate (€)
                        </label>
                        <input
                          type="number"
                          min={0}
                          placeholder="Guide Rate in euros"
                          className="form-control"
                          name="guide_rate"
                          value={tourData.guideRate}
                          onChange={(e) =>
                            onInputChange("guideRate", e.target.value)
                          }
                        />
                      </div>
                      <div className="col-sm-4">
                        <label className="form-label-title  ">
                          Ticket Cost (€)
                        </label>
                        <input
                          type="number"
                          min={0}
                          placeholder="Ticket cost in euros"
                          className="form-control"
                          name="ticket_cost"
                          value={tourData.ticketCost}
                          onChange={(e) =>
                            onInputChange("ticketCost", e.target.value)
                          }
                        />
                      </div>
                      <div className="col-sm-4">
                        <label className="form-label-title  ">
                          Vehicle/Driver Cost (€)
                        </label>
                        <input
                          type="number"
                          min={0}
                          placeholder="Verhicle cost in euros"
                          className="form-control"
                          name="vehicle_cost"
                          value={tourData.vehicleCost}
                          onChange={(e) =>
                            onInputChange("vehicleCost", e.target.value)
                          }
                        />
                      </div>
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

export default CostDetails;
