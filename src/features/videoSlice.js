import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import youtube from "../apis/youtube";

//  API Requesting from Youtueb....
export const searchVideos = createAsyncThunk(
  "videos/getVideos",
  async (videoTerm) => {
    const response = await youtube.get("/search", {
      params: {
        q: videoTerm,
      },
    });

    return response.data.items;
  }
);

const initialState = {
  videos: [],
  isLoading: false,
  selectedVideo: null,
};

const videoSlice = createSlice({
  name: "video",
  initialState,
  reducers: {
    // Selecting video reducer
    selectVideo(state, action) {
      state.selectedVideo = action.payload;
    },
  },
  // Extra reducers 
  extraReducers: (builder) => {
    builder.addCase(searchVideos.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(searchVideos.fulfilled, (state, action) => {
      state.videos = action.payload;
      state.selectedVideo = action.payload[0];
      state.isLoading = false;
    });
    builder.addCase(searchVideos.rejected, (state) => {
      state.isLoading = false;
    });
  },
});

// Selected video action.
export const { selectVideo } = videoSlice.actions;

export default videoSlice.reducer;
