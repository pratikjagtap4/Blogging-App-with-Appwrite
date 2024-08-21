import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allPosts: [],
};

const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    addPosts: (state, action) => {
      state.allPosts = action.payload.documents;
    },
  },
});

export const { addPosts } = postSlice.actions;

export default postSlice;
