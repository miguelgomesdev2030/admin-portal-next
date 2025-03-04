"use client";
import React from "react";
import AvailableTours from "@/components/Tours/AvailableTours";
import PaginationBox from "@/Common/PaginationBox";
import CommonCardHeader from "@/Common/CommonCardHeader";

const Available = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-sm-12">
          <div className="card">
            <CommonCardHeader
              navigate="/tours/addtour"
              tittle="Available Tours"
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
                  <AvailableTours />
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

export default Available;
