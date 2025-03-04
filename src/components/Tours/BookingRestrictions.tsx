import CommonCardFooter from "@/Common/CommonCardFooter";
import React from "react";
import AnimateCheckBox from "./AnimateCheckBox";
import EditorsSimple from "@/Common/EditorsSimple";
import DropZoneCommon from "@/Common/DropZoneCommon";
import WorldMap from "../Dashboard/WorldMap";
import CustomDatePicker from "@/Common/CustomDatePicker";
import Time from "react-datepicker/dist/time";
import TimeSlot from "@/Common/TimeSlot";

interface BookingRestrictionsProps {
  onInputChange: (field: string, value: string) => void;
  tourData: {
    maxiumumCapacity: string;
  };
}

const BookingRestrictions: React.FC<BookingRestrictionsProps> = ({
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
                  <h5>BOOKING RESTRICTIONS</h5>
                </div>
                <div className="card-body">
                  <form className="theme-form mega-form">
                    <div className="col-sm-6">
                      <label className="form-label-title  ">
                        Maxiumum Capacity
                      </label>
                      <input
                        type="number"
                        min={0}
                        placeholder="Maxiumum amount of people per tour date"
                        className="form-control"
                        name="maxiumum_capacity"
                        value={tourData.maxiumumCapacity}
                        onChange={(e) =>
                          onInputChange("maxiumumCapacity", e.target.value)
                        }
                      />
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

export default BookingRestrictions;
