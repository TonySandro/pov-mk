import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User, UserState } from "./userTypes";

const userFromStorage = localStorage.getItem("user");
const initialUser = userFromStorage ? JSON.parse(userFromStorage) : null;

const initialState: UserState = {
  user: initialUser,
  isAuthenticated: !!initialUser,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login(state, action: PayloadAction<User>) {
      state.user = action.payload;
      state.isAuthenticated = true;

      localStorage.setItem("user", JSON.stringify(action.payload));
    },
  },
});

export const { login } = userSlice.actions;
export default userSlice.reducer;
