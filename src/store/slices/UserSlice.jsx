/* eslint-disable no-unused-vars */
import { createSlice } from "@reduxjs/toolkit";

const users = createSlice({
  name: "user",
  initialState: [],
  reducers: {
    addUser(state, action) {
      state.push(action.payload);
    },
    removeUser(state, action) {
      state.splice(action.payload, 1);
    },
    deleteUser(state, action) {
      // state.splice(action.payload);
      return (state = []);
    },
  },

  extraReducers(builder) {
    builder.addCase(users.actions.deleteUser, () => {
      return [];
    });
  },
});

export default users.reducer;
export const { addUser, removeUser, deleteUser } = users.actions;
