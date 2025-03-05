import React from "react";

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
