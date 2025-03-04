import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "@/utils/api";
import { Response } from "@/types/api";
import { toast } from "react-toastify";
import Cookies from "js-cookie";

interface InitialState {
  toggleSideBar: boolean;
  toggleRtl: boolean;
  user: {
    firstname: string;
    lastname: string;
    email: string;
    role: string;
  };
  loading: boolean;
}

type UserTypes = {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
};

const initialState: InitialState = {
  toggleSideBar: false,
  toggleRtl: false,
  user: {
    firstname: "",
    lastname: "",
    email: "",
    role: "",
  },
  loading: false,
};

export const accountLoginAction = createAsyncThunk(
  "auth/login",
  async (user: UserTypes, { rejectWithValue }) => {
    // console.log(user);
    try {
      const response = await api.post<
        Response<{
          token: string;
          user: {
            firstname: string;
            lastname: string;
            email: string;
            role: string;
          };
        }>
      >(`/api/users/login`, { email: user.email, password: user.password });
      console.log(response);
      localStorage.setItem("token", response.data.token);
      Cookies.set("token", response.data.token);
      return response.data; // Expected response: { user, token }
    } catch (error) {
      console.log(error.response.data.error);

      return rejectWithValue(error.response.data.error);
    }
  }
);

export const checkAuthenticated = createAsyncThunk(
  "auth/checkauthenticated",
  async (token: string, { rejectWithValue }) => {
    // console.log(user);
    try {
      const response = await api.post<
        Response<{
          token: string;
          user: {
            firstname: string;
            lastname: string;
            email: string;
            role: string;
          };
        }>
      >(`/api/users/checkauthenticated`, {
        token: token,
      });
      console.log("checkAuthenticated: ", response);
      // localStorage.setItem("token", response.data.token);
      // Cookies.set("token", response.data.token);
      return response.data; // Expected response: { user, token }
    } catch (error) {
      console.log(error.response.data.error);

      return rejectWithValue(error.response.data.error);
    }
  }
);

export const accountRegisterAction = createAsyncThunk(
  "auth/register",
  async (user: UserTypes) => {
    // console.log(user);
    try {
      const response = await api.post<
        Response<{ token: string; user: { name: string; email: string } }>
      >(`/api/users/register`, {
        firstname: user.firstname,
        lastname: user.lastname,
        email: user.email,
        password: user.password,
      });
      console.log("response: ", response);
      // localStorage.setItem("token", response.data.token);
      // Cookies.set("token", response.data.token);
      // return response.data; // Expected response: { user, token }
    } catch (error) {
      console.log(error.response.data.error);

      return error.response.data.error;
    }
  }
);

const AuthReducers = createSlice({
  name: "AuthReducers",
  initialState,
  reducers: {
    setToggleSideBar: (state) => {
      state.toggleSideBar = !state.toggleSideBar;
    },
    responsiveSideBar: (state, action) => {
      state.toggleSideBar = action.payload;
    },
    setToggleRtl: (state) => {
      state.toggleRtl = !state.toggleRtl;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(accountLoginAction.pending, (state) => {
        state.loading = true;
      })
      .addCase(accountLoginAction.fulfilled, (state, action) => {
        if (action.payload?.user) {
          state.user.firstname = action.payload.user.firstname;
          state.user.lastname = action.payload.user.lastname;
          state.user.email = action.payload.user.email;
          state.user.role = action.payload.user.role;
        }
        state.loading = false;
      })
      .addCase(accountLoginAction.rejected, (state, action) => {
        // console.log(action.payload);

        state.loading = false;
      })
      .addCase(accountRegisterAction.pending, (state) => {
        state.loading = true;
      })
      .addCase(accountRegisterAction.fulfilled, (state, action) => {
        if (action.payload?.user) {
          state.user.lastname = action.payload.user.lastname;
          state.user.firstname = action.payload.user.firstname;
          state.user.email = action.payload.user.email;
        }
        state.loading = false;
      })
      .addCase(accountRegisterAction.rejected, (state, action) => {
        // console.log(action.payload);

        state.loading = false;
      })
      .addCase(checkAuthenticated.pending, (state) => {
        state.loading = true;
      })
      .addCase(checkAuthenticated.fulfilled, (state, action) => {
        if (action.payload?.user) {
          state.user.lastname = action.payload.user.lastname;
          state.user.firstname = action.payload.user.firstname;
          state.user.email = action.payload.user.email;
          state.user.role = action.payload.user.role;
        }
        state.loading = false;
      })
      .addCase(checkAuthenticated.rejected, (state, action) => {
        // console.log(action.payload);

        state.loading = false;
      });
  },
});

export const { setToggleSideBar, setToggleRtl, responsiveSideBar } =
  AuthReducers.actions;

export default AuthReducers.reducer;
