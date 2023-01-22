import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    user: {
      stage: 0,
    },
  },

  reducers: {
    setStage(state, action) {
      // @ts-ignore
      state.user.stage = action;
    },
  },
});

// @ts-ignore
export const { setStage } = userSlice.actions;

export default userSlice.reducer;
