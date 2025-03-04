"use client";
import AdditionalTravelers from "@/components/TravelAgent/AdditionalTravelers";
import LeadTraveler from "@/components/TravelAgent/LeadTraveler";
import SpecialRequirements from "@/components/TravelAgent/SpecialRequirements";
import TourDetails from "@/components/TravelAgent/TourDetails";
import React from "react";

const CreateBooking = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <div className="row">
              <div className="col-sm-12">
                <div className="card">
                  <div className="card-header mb-3">
                    <h3>Create Booking</h3>
                  </div>
                  <LeadTraveler />
                  <AdditionalTravelers />
                  <TourDetails />
                  <SpecialRequirements />
                  <div className="mb-3 justify-content-end d-flex m-r-10">
                    <button
                      className="btn btn-primary btn-block w-10"
                      type="button"
                      onClick={() => {
                        console.log("clicked");
                      }}
                    >
                      Book
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateBooking;
