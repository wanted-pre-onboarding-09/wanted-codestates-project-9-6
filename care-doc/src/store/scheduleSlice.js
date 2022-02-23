import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  startDate: '',
  endDate: '',
  visitTime: '',
  hour: 0,
};

const scheduleSlice = createSlice({
  name: 'scheduleSlice',
  initialState,
  reducers: {
    changeStartDate: (state, action) => {
      state.startDate = action.payload;
    },
    changeEndDate: (state, action) => {
      state.endDate = action.payload;
    },
    changeVisitTime: (state, action) => {
      state.visitTime = action.payload;
    },
    changeHour: (state, action) => {
      state.hour = action.payload;
    },
    clearDate: () => initialState,
  },
});

export const {
  changeStartDate,
  changeEndDate,
  changeVisitTime,
  chageHour,
  clearDate,
} = scheduleSlice.actions;
export default scheduleSlice.reducer;
