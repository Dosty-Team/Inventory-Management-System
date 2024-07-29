// renderSlice.js

import { createSlice } from "@reduxjs/toolkit";

const renderSlice = createSlice({
  name: "render",
  initialState: { shouldRender: false ,shouldProductRender: false},
  reducers: {
    triggerRender: (state) => {
      state.shouldRender = !state.shouldRender;
    },
    //between product pages ma re-rendering ko lagi dependency through slice 
    triggerProductPageRender: (state) => {
      // You can customize the logic here if needed
      state.shouldProductRender = !state.shouldProductRender;
    },
    triggerSalespagePageRender: (state) => {
      // You can customize the logic here if needed
      state.shouldSalespageRender = !state.shouldSalespageRender;
    },
  },
});

export const renderActions = renderSlice.actions;
export default renderSlice.reducer;
