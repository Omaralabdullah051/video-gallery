import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tags: [],
  search: "",
  pageNumber: 1,
  author: "",
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    tagSelected: (state, action) => {
      state.tags.push(action.payload);
    },
    tagRemoved: (state, action) => {
      const indexToRemove = state.tags.indexOf(action.payload);

      if (indexToRemove !== -1) {
        state.tags.splice(indexToRemove, 1);
      }
    },
    searched: (state, action) => {
      state.search = action.payload;
      state.pageNumber = 1;
    },
    changePageNumber: (state, action) => {
      state.pageNumber = action.payload;
    },
    resetFilter: (state, action) => {
      state.tags = [];
      state.search = "";
      state.pageNumber = 1;
      state.author = "";
    },
    authorFilter: (state, action) => {
      state.author = action.payload;
    },
  },
});

export default filterSlice.reducer;
export const {
  tagSelected,
  tagRemoved,
  searched,
  changePageNumber,
  resetFilter,
  authorFilter,
} = filterSlice.actions;
