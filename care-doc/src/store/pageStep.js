import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  currentStep: 1,
};

const pageStepSlice = createSlice({
  name: 'pageStep',
  initialState,
  reducers: {
    nextStep: (state, action) => ({
      ...state,
      currentStep: state.currentStep + 1,
    }),
    previousStep: (state, action) => ({
      ...state,
      currentStep:
        state.currentStep > 1 ? state.currentStep - 1 : state.currentStep,
    }),
    clearStep: () => initialState,
  },
});

export const { nextStep, previousStep, clearStep } = pageStepSlice.actions;
export default pageStepSlice.reducer;
