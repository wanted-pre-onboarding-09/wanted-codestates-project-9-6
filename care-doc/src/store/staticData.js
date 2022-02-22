import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  test: 1,
  test2: 2,
  test3: 3,
};

const staticDataSlice = createSlice({
  name: 'test',
  initialState,
  reducers: {
    nextStep: (state, action) => ({
      ...state,
      test: state.test + 1,
    }),
    previousStep: (state, action) => ({
      ...state,
      test: state.test - 1,
    }),
  },
  // extraReducers:
});

export const { nextStep, previousStep } = staticDataSlice.actions;
export default staticDataSlice.reducer;
