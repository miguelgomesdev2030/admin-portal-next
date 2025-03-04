"use client";
import React, { useState } from "react";
import AvailabilityAndPricing from "@/components/Tours/AvailabilityAndPricing";
import BookingRestrictions from "@/components/Tours/BookingRestrictions";
import CostDetails from "@/components/Tours/CostDetails";
import TourDetails from "@/components/Tours/TourDetails";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/store";
import { addTourAction } from "@/store/tours";

const AddTours = () => {
  const dispatch = useDispatch<AppDispatch>();

  const [tourData, setTourData] = useState({
    tourName: "",
    shortDescription: "",
    generalDescription: "",
    durationHours: "0",
    durationMinutes: "0",
    whatToBring: "",
    knowBefore: "",
    questions: "",
    privateTour: false,
    meetingLocation: "",
    uploadedFiles: [] as File[], // Store images here
    indefiniteAvailability: false,
    startDate: new Date().toISOString().split("T")[0],
    endDate: new Date().toISOString().split("T")[0],
    timeSlots: [
      {
        time: new Date().toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
          hour12: false,
        }),
        day_of_week: new Date().toLocaleDateString("en-US", {
          weekday: "long",
        }),
        specific_date: new Date().toISOString().split("T")[0],
      },
    ],
    guideRate: "",
    ticketCost: "",
    vehicleCost: "",
    maxiumumCapacity: "",
  });

  const handleInputChange = (
    field: string,
    value: string | boolean | File[] | Date | null
  ) => {
    // console.log(field, value);
    setTourData((tourData) => ({ ...tourData, [field]: value }));
  };

  const updateTimeSlot = (index: number, date: Date) => {
    const updatedSlots = [...tourData.timeSlots];
    updatedSlots[index] = {
      time: date.toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
      }),
      day_of_week: date.toLocaleDateString("en-US", {
        weekday: "long",
      }),
      specific_date: date.toISOString().split("T")[0],
    };
    setTourData((prevData) => ({
      ...prevData,
      timeSlots: updatedSlots,
    }));
  };

  const removeTimeSlot = (index: number) => {
    setTourData((prevData) => ({
      ...prevData,
      timeSlots: prevData.timeSlots.filter((_, i) => i !== index),
    }));
  };

  const handleAddTour = async () => {
    console.log("Tour Data:", tourData);

    dispatch(addTourAction(tourData));
  };

  const addTimeSlot = () => {
    setTourData((prevData) => ({
      ...prevData,
      timeSlots: [
        ...prevData.timeSlots,
        {
          time: new Date().toLocaleTimeString("en-US", {
            hour: "2-digit",
            minute: "2-digit",
            hour12: false,
          }),
          day_of_week: new Date().toLocaleDateString("en-US", {
            weekday: "long",
          }),
          specific_date: new Date().toISOString().split("T")[0],
        },
      ],
    })); // Add a new TimeSlot with the current date/time
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
                    <h3>Create a new tour</h3>
                  </div>
                  {/* <AddToursCardBody /> */}
                  <TourDetails
                    onInputChange={handleInputChange}
                    tourData={tourData}
                  />
                  <AvailabilityAndPricing
                    onInputChange={handleInputChange}
                    tourData={tourData}
                    addTimeSlot={addTimeSlot}
                    updateTimeSlot={updateTimeSlot}
                    removeTimeSlot={removeTimeSlot}
                  />
                  <CostDetails
                    onInputChange={handleInputChange}
                    tourData={tourData}
                  />
                  <BookingRestrictions
                    onInputChange={handleInputChange}
                    tourData={tourData}
                  />
                  <div className="mb-5 justify-content-start d-flex m-l-50">
                    <button
                      className="btn btn-primary btn-block w-10"
                      type="button"
                      onClick={handleAddTour}
                    >
                      Add Tour
                    </button>
                  </div>

                  {/* <TourDetails /> */}
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

export default AddTours;
