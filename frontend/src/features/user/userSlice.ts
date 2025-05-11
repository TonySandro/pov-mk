import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserState } from "./userTypes";

const initialState: UserState = {
  name: "",
  loggedIn: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login(state, action: PayloadAction<string>) {
      state.name = action.payload;
      state.loggedIn = true;
    },
    logout(state) {
      state.name = "";
      state.loggedIn = false;
    },
  },
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;
