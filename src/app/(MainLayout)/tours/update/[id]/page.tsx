"use client";
import React, { useEffect, useState } from "react";
import AvailabilityAndPricing from "@/components/Tours/AvailabilityAndPricing";
import BookingRestrictions from "@/components/Tours/BookingRestrictions";
import CostDetails from "@/components/Tours/CostDetails";
import TourDetails from "@/components/Tours/TourDetails";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "@/store";
import { addTourAction, tourRowsState, updateTourAction } from "@/store/tours";
import { useParams } from "next/navigation";

const updateTours = () => {
  const { id } = useParams();
  const dispatch = useDispatch<AppDispatch>();

  const numericId = id ? parseInt(id as string, 10) : null;

  const { tourRows } = useSelector(tourRowsState);

  const tourRow = tourRows.find((tour) => tour.id === numericId);

  console.log(tourRow);

  const [tourData, setTourData] = useState({
    tourName: tourRow ? tourRow.name : "",
    shortDescription: tourRow ? tourRow.short_description : "",
    generalDescription: tourRow ? tourRow.general_description : "",
    durationHours: tourRow ? String(tourRow.duration_hours) : "0",
    durationMinutes: tourRow ? String(tourRow.duration_minutes) : "0",
    whatToBring: tourRow ? tourRow.what_to_bring : "",
    knowBefore: tourRow ? tourRow.know_before : "",
    questions: tourRow ? tourRow.questions : "",
    privateTour: tourRow ? tourRow.private_tour : false,
    meetingLocation: tourRow ? tourRow.meeting_location : "",
    uploadedFiles: tourRow ? (tourRow.uploadedFiles as File[]) : ([] as File[]), // Store images here
    indefiniteAvailability: tourRow ? tourRow.indefinite_availability : false,
    startDate: tourRow
      ? tourRow.start_date
      : new Date().toISOString().split("T")[0],
    endDate: tourRow
      ? tourRow.end_date
      : new Date().toISOString().split("T")[0],
    timeSlots: tourRow
      ? JSON.parse(tourRow.time_slots)
      : [
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
    guideRate: tourRow ? tourRow.guide_rate : "",
    ticketCost: tourRow ? tourRow.ticket_cost : "",
    vehicleCost: tourRow ? tourRow.vehicle_cost : "",
    maxiumumCapacity: tourRow ? tourRow.max_capacity : "",
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
      timeSlots: prevData.timeSlots.filter((_: any, i: number) => i !== index),
    }));
  };

  const handleAddTour = async () => {
    console.log("Tour Data:", tourData);

    if (numericId !== null) {
      dispatch(updateTourAction({ id: numericId, tourData }));
    } else {
      console.error("Invalid tour ID");
    }
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
      {console.log(tourRow)}
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <div className="row">
              <div className="col-sm-12">
                <div className="card">
                  <div className="card-header mb-3">
                    <h3>Update a Tour</h3>
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
                      Update Tour
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

export default updateTours;
