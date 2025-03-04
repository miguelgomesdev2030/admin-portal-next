import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "@/utils/api";
import { Response } from "@/types/api";

interface ThemeCustomize {
  toggleSideBar: boolean;
  toggleRtl: boolean;
  user: {
    name: string;
    email: string;
  };
  loading: boolean;
}

const initialState: ThemeCustomize = {
  toggleSideBar: false,
  toggleRtl: false,
  user: {
    name: "",
    email: "",
  },
  loading: false,
};

export const accountLoginAction = createAsyncThunk(
  "auth/login",
  async ({ email, password }: { email: string; password: string }) => {
    try {
      const response = await api.post<
        Response<{ token: string; user: { name: string; email: string } }>
      >(`/users/login`, { email, password });

      return response.data; // Expected response: { user, token }
    } catch (error: any) {
      return console.log(error);
    }
  }
);

const ThemeCustomize = createSlice({
  name: "ThemeCustomize",
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
          state.user.name = action.payload.user.name;
          state.user.email = action.payload.user.email;
          localStorage.setItem("token", action.payload.token);
        }
        state.loading = false;
      })
      .addCase(accountLoginAction.rejected, (state, action) => {
        state.loading = false;
      });
  },
});

export const { setToggleSideBar, setToggleRtl, responsiveSideBar } =
  ThemeCustomize.actions;

export default ThemeCustomize.reducer;
