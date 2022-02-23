import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  startDate: '', // yyyy-MM-dd
  endDate: '', // yyyy-MM-dd
  visitTime: '', // hh:mm:ss
  hour: 0,
  startCare: '선택',
  dayCare: '선택',
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
    changeStartCare: (state, action) => {
      state.startCare = action.payload;
    },
    changeDayCare: (state, action) => {
      state.dayCare = action.payload;
    },
    clearDate: () => initialState,
  },
});

export const {
  changeStartDate,
  changeEndDate,
  changeVisitTime,
  changeHour,
  clearDate,
  changeStartCare,
  changeDayCare,
} = scheduleSlice.actions;
export default scheduleSlice.reducer;
