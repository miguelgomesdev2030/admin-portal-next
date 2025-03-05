import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "@/utils/api";
import { Response } from "@/types/api";
import { toast } from "react-toastify";
import { RootState } from "..";

interface InitialState {
  tourRows: {
    id: number;
    name: string;
    short_description: string;
    duration_hours: number;
    location: string;
    what_to_bring: string;
    know_before: string;
    questions: string;
  }[];
  tourData: {
    tourName: string;
    shortDescription: string;
    generalDescription: string;
    durationHours: string;
    durationMinutes: string;
    whatToBring: string;
    knowBefore: string;
    questions: string;
    privateTour: boolean;
    meetingLocation: string;
    uploadedFiles: File[]; // Store images here
    indefiniteAvailability: boolean;
    startDate: string;
    endDate: string;
    timeSlots: {
      time: string;
      day_of_week: string;
      specific_date: string;
    }[];
    guideRate: string;
    ticketCost: string;
    vehicleCost: string;
    maxiumumCapacity: string;
  };
  loading: boolean;
  error: string | null;
}

type TourTypes = {
  tourName: string;
  shortDescription: string;
  generalDescription: string;
  durationHours: string;
  durationMinutes: string;
  whatToBring: string;
  knowBefore: string;
  questions: string;
  privateTour: boolean;
  meetingLocation: string;
  uploadedFiles: File[]; // Store images here
  indefiniteAvailability: boolean;
  startDate: string;
  endDate: string;
  timeSlots: {
    time: string;
    day_of_week: string;
    specific_date: string;
  }[];
  guideRate: string;
  ticketCost: string;
  vehicleCost: string;
  maxiumumCapacity: string;
};

const initialState: InitialState = {
  tourRows: [],
  tourData: {
    tourName: "",
    shortDescription: "",
    generalDescription: "",
    durationHours: "",
    durationMinutes: "",
    whatToBring: "",
    knowBefore: "",
    questions: "",
    privateTour: false,
    meetingLocation: "",
    timeSlots: [
      {
        time: "",
        day_of_week: "",
        specific_date: "",
      },
    ],
    guideRate: "",
    ticketCost: "",
    vehicleCost: "",
    maxiumumCapacity: "",
    uploadedFiles: [],
    indefiniteAvailability: false,
    startDate: "",
    endDate: "",
  },
  loading: false,
  error: null,
};

export const addTourAction = createAsyncThunk(
  "tours/addtour",
  async (tourData: TourTypes, { rejectWithValue }) => {
    console.log("Sending tourData:", tourData);
    try {
      const formData = new FormData();
      formData.append("image", tourData.uploadedFiles[0]); // Append image
      formData.append("name", tourData.tourName);
      formData.append("short_description", tourData.shortDescription);
      formData.append("general_description", tourData.generalDescription);
      formData.append("duration_hours", tourData.durationHours);
      formData.append("duration_minutes", tourData.durationMinutes);
      formData.append("what_to_bring", tourData.whatToBring);
      formData.append("know_before", tourData.knowBefore);
      formData.append("questions", tourData.questions);
      formData.append("private_tour", JSON.stringify(tourData.privateTour));
      formData.append("meeting_location", tourData.meetingLocation);
      formData.append("time_slots", JSON.stringify(tourData.timeSlots));
      formData.append("start_date", tourData.startDate);
      formData.append("end_date", tourData.endDate);
      formData.append(
        "indefinite_availability",
        JSON.stringify(tourData.indefiniteAvailability)
      );
      formData.append("max_capacity", tourData.maxiumumCapacity);
      formData.append("guide_rate", tourData.guideRate);
      formData.append("ticket_cost", tourData.ticketCost);
      formData.append("vehicle_cost", tourData.vehicleCost);
      formData.append("is_additional_name_required", JSON.stringify(false));
      formData.append("is_additional_email_required", JSON.stringify(false));

      const response = await api.post<Response<{ id: string; image: string }>>(
        `/api/tours`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      console.log("response: ", response.data);
      return response.data; // Expected response: { id, image }
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.error || "Something went wrong."
      );
    }
  }
);

export const getToursAction = createAsyncThunk<
  {
    id: number;
    name: string;
    short_description: string;
    duration_hours: number;
    location: string;
    what_to_bring: string;
    know_before: string;
    questions: string;
  }[],
  void,
  { rejectValue: string }
>("tours/available", async (_req, { rejectWithValue }) => {
  try {
    const response = await api.get<
      Response<
        {
          id: number;
          name: string;
          short_description: string;
          duration_hours: number;
          location: string;
          what_to_bring: string;
          know_before: string;
          questions: string;
        }[]
      >
    >(`/api/tours`);

    console.log("response: ", response.data);
    return response.data; // Expected response: { id, image }
  } catch (error) {
    return rejectWithValue(
      error.response?.data?.error || "Something went wrong."
    );
  }
});

export const deleteToursAction = createAsyncThunk<
  {
    id: number;
  },
  void,
  { rejectValue: string }
>("tours/available", async (_req, { rejectWithValue }) => {
  try {
    const response = await api.get(`/api/tours`);

    console.log("response: ", response.data);
    return response.data; // Expected response: { id, image }
  } catch (error) {
    return rejectWithValue(
      error.response?.data?.error || "Something went wrong."
    );
  }
});

const TourReducers = createSlice({
  name: "TourReducers",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(addTourAction.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addTourAction.fulfilled, (state, action) => {
        toast.success("Tour added successfully!");
        state.loading = false;
      })
      .addCase(addTourAction.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
        toast.error(action.payload as string);
      })
      .addCase(getToursAction.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getToursAction.fulfilled, (state, action) => {
        state.tourRows = action.payload;
        console.log(state.tourRows);
        state.loading = false;
      })
      .addCase(getToursAction.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
        toast.error(action.payload as string);
      });
  },
});

export const tourRowsState = (state: RootState) => state.TourReducers;

export default TourReducers.reducer;
