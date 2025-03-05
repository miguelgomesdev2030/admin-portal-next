"use client";
import React, { useEffect } from "react";
import AvailableTours from "@/components/Tours/AvailableTours";
import PaginationBox from "@/Common/PaginationBox";
import CommonCardHeader from "@/Common/CommonCardHeader";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "@/store";
import {
  deleteToursAction,
  getToursAction,
  tourRowsState,
} from "@/store/tours";

const Available = () => {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(getToursAction());
  }, []);

  const { tourRows } = useSelector(tourRowsState);
  console.log("tourRows: ", tourRows);

  const deleteTour = (id: number) => {
    dispatch(deleteToursAction(id));
  };

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
                  <AvailableTours tourRows={tourRows} deleteTour={deleteTour} />
                </div>
              </div>
            </div>
            {/* <PaginationBox /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Available;
