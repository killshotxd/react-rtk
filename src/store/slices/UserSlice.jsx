/* eslint-disable no-unused-vars */
import { createSlice } from "@reduxjs/toolkit";

const users = createSlice({
  name: "user",
  initialState: [],
  reducers: {
    addUser(state, action) {
      state.push(action.payload);
    },
    removeUser(state, action) {},
    deleteUser(state, action) {},
  },
});

export default users.reducer;
export const { addUser } = users.actions;
