import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: null,
  reducers: {
    addUser: (state, action) => {
      return action.payload; //simply set the user to the initial state, since there will always be a single user
    },
    removeUser: (state, action) => {
      return null; //simply return null when user signOut/logout
    },
  },
});

export const { addUser, removeUser } = userSlice.actions;
export default userSlice.reducer;
