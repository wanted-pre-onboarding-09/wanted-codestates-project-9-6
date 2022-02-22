import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  currentStep: 1,
};

const loginstepSlice = createSlice({
  name: 'xxxxx',
  initialState,
  reducers: {
    nextStep: (state, action) => ({
      ...state,
      currentStep: state.currentStep + 1,
    }),
    previousStep: (state, action) => ({
      ...state,
      currentStep: state.currentStep - 1,
    }),
    clearStep: () => initialState,
  },
  // extraReducers:
});

export const { nextStep, previousStep, clearStep } = loginstepSlice.actions;
export default loginstepSlice.reducer;
