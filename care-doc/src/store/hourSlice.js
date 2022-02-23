import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  careHour: '선택',
  careDate: '선택',
};

const hourSlice = createSlice({
  name: 'careHours',
  initialState,
  reducers: {
    selectHour: (state, action) => ({
      ...state,
      careHour: action,
    }),
    selectDate: (state, action) => ({
      ...state,
      careDate: action,
    }),
    clearType: () => initialState,
  },
});

export const { selectHour, selectDate, clearType } = hourSlice.actions;
export default hourSlice.reducer;
