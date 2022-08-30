import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getVideo } from "./videoAPI";
import { updateLike } from "../likeUnlike/likeUnlikeAPI";
import { updateUnlike } from "../likeUnlike/likeUnlikeAPI2";

const initialState = {
  video: {},
  isLoading: false,
  isError: false,
  error: "",
};

//* async thunk
export const fetchVideo = createAsyncThunk("video/fetchVideo", async (id) => {
  const video = getVideo(id);

  return video;
});

export const updateOverallLike = createAsyncThunk(
  "like/video",
  async ({ id, numberOfLikes }) => {
    const updateLikes = updateLike({ id, numberOfLikes });

    return updateLikes;
  }
);

export const updateOverallUnLike = createAsyncThunk(
  "unlike/video",
  async ({ id, numberOfUnlikes }) => {
    const updateUnlikes = updateUnlike({ id, numberOfUnlikes });

    return updateUnlikes;
  }
);

const videoSlice = createSlice({
  name: "video",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchVideo.pending, (state) => {
        state.isError = false;
        state.isLoading = true;
      })
      .addCase(fetchVideo.fulfilled, (state, action) => {
        state.isLoading = false;
        state.video = action.payload;
      })
      .addCase(fetchVideo.rejected, (state, action) => {
        state.isLoading = false;
        state.video = {};
        state.isError = true;
        state.error = action.error?.message;
      })
      .addCase(updateOverallLike.pending, () => {})
      .addCase(updateOverallLike.fulfilled, () => {})
      .addCase(updateOverallLike.rejected, () => {})
      .addCase(updateOverallUnLike.pending, () => {})
      .addCase(updateOverallUnLike.fulfilled, () => {})
      .addCase(updateOverallUnLike.rejected, () => {});
  },
});

export default videoSlice.reducer;
