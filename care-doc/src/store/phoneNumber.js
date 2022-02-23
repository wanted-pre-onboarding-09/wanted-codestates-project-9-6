import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  currentPhone: '',
};

const phoneSlide = createSlice({
  name: 'phone',
  initialState,
  reducers: {
    addPhone: (state, action) => ({
      ...state,
      currentPhone: action.payload,
    }),
  },
});

export const { addPhone } = phoneSlide.actions;

export default phoneSlide.reducer;
