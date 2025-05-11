import userReducer, { login, logout } from "./userSlice";
import { UserState } from "./userTypes";

describe("userSlice", () => {
  const initialState: UserState = { name: "", loggedIn: false };

  it("Ensures the user is logged in", () => {
    const nextState = userReducer(initialState, login("Tony"));
    expect(nextState.name).toBe("Tony");
    expect(nextState.loggedIn).toBe(true);
  });

  it("Ensures the user is logged out", () => {
    const loggedInState: UserState = { name: "Tony", loggedIn: true };
    const nextState = userReducer(loggedInState, logout());
    expect(nextState).toEqual(initialState);
  });
});
