// index.jsx

import { configureStore } from "@reduxjs/toolkit";
import pageSlice from "./pageSlice";
import userSlice from "./userSlice";
import renderReducer from "./renderSlice"; // Import the new slice

const store = configureStore({
  reducer: {
    page: pageSlice.reducer,
    user: userSlice.reducer,
    render: renderReducer, // Include the new reducer
  },
});

export default store;
