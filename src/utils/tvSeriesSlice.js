import { createSlice } from "@reduxjs/toolkit";

const tvSeriesSlice = createSlice({
  name: "tvSeries",
  initialState: {
    airingToday: null,
    onTheAir: null,
    popular: null,
    topRated: null,
  },
  reducers: {
    addAiringToday: (state, action) => {
      state.airingToday = action.payload;
    },
    addOnTheAir: (state, action) => {
      state.onTheAir = action.payload;
    },
    addPopular: (state, action) => {
      state.popular = action.payload;
    },
    addTopRated: (state, action) => {
      state.topRated = action.payload;
    },
  },
});

export const { addAiringToday, addOnTheAir, addPopular, addTopRated } =
  tvSeriesSlice.actions;

export default tvSeriesSlice.reducer;
