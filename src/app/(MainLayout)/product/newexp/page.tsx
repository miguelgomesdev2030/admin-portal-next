"use client";
import React, { useState } from "react";
import AvailabilityAndPricing from "@/components/Product/AvailabilityAndPricing";
import CostDetails from "@/components/Product/CostDetails";
import TourDetails from "@/components/Product/TourDetails";
import ContentWriterArea from "@/components/Product/ContentWriterArea";
import PictureInsertion from "@/components/Product/PictureInsertion";
import BookingDetails from "@/components/Product/BookingDetails";

const NewExp = () => {
  const [stepTab, setStepTab] = useState(1);

  const handleStepTab = (
    _e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    step: React.SetStateAction<number>
  ) => {
    // console.log((_e.target as HTMLElement).classList.add("active"));
    setStepTab(step);
  };

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <div className="row">
              <div className="col-sm-12">
                <div className="card">
                  <div className="card-header mb-3">
                    <h3>Create a new tour (Multi-Step)</h3>
                  </div>
                  <div className="container-fluid">
                    <div className="row">
                      <div className="col-12">
                        <div className="row">
                          <div className="col-sm-12">
                            <div className="card">
                              <div className="">
                                <ul className="nav nav-tabs w-100">
                                  <li className="nav-item">
                                    <a
                                      className="nav-link"
                                      aria-current="page"
                                      href="#"
                                      onClick={(e) => handleStepTab(e, 1)}
                                    >
                                      TOUR DETAILS
                                    </a>
                                  </li>
                                  <li className="nav-item">
                                    <a
                                      className="nav-link"
                                      href="#"
                                      onClick={(e) => handleStepTab(e, 2)}
                                    >
                                      CONTENT WRITER AREA
                                    </a>
                                  </li>
                                  <li className="nav-item">
                                    <a
                                      className="nav-link"
                                      href="#"
                                      onClick={(e) => handleStepTab(e, 3)}
                                    >
                                      PICTUIRE INSERTION
                                    </a>
                                  </li>
                                  <li className="nav-item">
                                    <a
                                      className="nav-link"
                                      href="#"
                                      onClick={(e) => handleStepTab(e, 4)}
                                    >
                                      COST DETAILS
                                    </a>
                                  </li>
                                  <li className="nav-item">
                                    <a
                                      className="nav-link"
                                      href="#"
                                      onClick={(e) => handleStepTab(e, 5)}
                                    >
                                      BOOKING DETAILS
                                    </a>
                                  </li>
                                </ul>
                                <div className="d-flex justify-content-between mt-3 m-l-10 m-r-10">
                                  <button className="btn btn-primary">
                                    Previous
                                  </button>
                                  <button className="btn btn-primary">
                                    Next
                                  </button>
                                </div>
                              </div>
                              <div className="card-body">
                                {stepTab === 1 && (
                                  <>
                                    <TourDetails />
                                    <AvailabilityAndPricing />
                                  </>
                                )}
                                {stepTab === 2 && <ContentWriterArea />}
                                {stepTab === 3 && <PictureInsertion />}
                                {stepTab === 4 && <CostDetails />}
                                {stepTab === 5 && <BookingDetails />}
                              </div>
                              <div className="d-flex justify-content-between mb-3 m-l-10 m-r-10">
                                <button className="btn btn-primary">
                                  Previous
                                </button>
                                <button className="btn btn-primary">
                                  Next
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <RoomDetails /> */}
    </>
  );
};

export default NewExp;
