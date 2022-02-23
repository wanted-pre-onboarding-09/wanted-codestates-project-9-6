import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  currentCareType: '',
};

const careTypeSlice = createSlice({
  name: 'careType',
  initialState,
  reducers: {
    changeTime: (state, action) => ({
      ...state,
      currentCareType: 'TIME',
    }),
    changeDay: (state, action) => ({
      ...state,
      currentCareType: 'DAY',
    }),
    clearType: () => initialState,
  },
  // extraReducers:
});

export const { changeTime, changeDay, clearType } = careTypeSlice.actions;
export default careTypeSlice.reducer;
