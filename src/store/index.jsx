import { configureStore } from "@reduxjs/toolkit";
import users from "./slices/UserSlice";

const store = configureStore({
  reducer: {
    users: users,
  },
});

export default store;
