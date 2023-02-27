import { configureStore } from "@reduxjs/toolkit";
import videoReducer from "../features/videoSlice";
export const store = configureStore({
  reducer: {
    video: videoReducer,
  },
});
