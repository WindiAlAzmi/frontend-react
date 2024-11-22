import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  img: "",
};

export const imageSlice = createSlice({
  name: "image",
  initialState,
  reducers: {
    putImage: (state, action) => {
      state.img = action.payload
    },
    delImage: (state) => {
      state.img = "";
    },
  },
});

export const { putImage, delImage } = imageSlice.actions;

export default imageSlice.reducer;
