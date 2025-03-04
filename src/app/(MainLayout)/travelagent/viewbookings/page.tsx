"use client";
import React from "react";
import AvailableTours from "@/components/Tours/AvailableTours";
import PaginationBox from "@/Common/PaginationBox";
import CommonCardHeader from "@/Common/CommonCardHeader";
import ViewBooking from "@/components/TravelAgent/ViewBooking";

const ViewBookings = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-sm-12">
          <div className="card">
            <CommonCardHeader
              navigate="/travelagent/createbooking"
              tittle="View Bookings"
            />
            <div className="card-body">
              <div className="col-sm-4">
                <input
                  type="text"
                  placeholder="Start typing to search or filter your tours"
                  className="form-control"
                />
                <br />
              </div>
              <div>
                <div className="table-responsive table-desi">
                  <ViewBooking />
                </div>
              </div>
            </div>
            <PaginationBox />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewBookings;
