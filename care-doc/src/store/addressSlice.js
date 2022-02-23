import { createSlice, createAsyncThunk, createAction } from '@reduxjs/toolkit';
import axios from 'axios';

const getAddressAction = createAction('address/getAddress');

const getAddress = createAsyncThunk(
  getAddressAction,
  async (keyword, ThunkAPI) => {
    const response = await axios.get(
      `https://www.juso.go.kr/addrlink/addrLinkApi.do?currentPage=1&countPerPage=10&keyword=${keyword}&confmKey=${process.env.REACT_APP_ADDRESS_API_KEY}&resultType=json`,
    );
    return response.data.results;
  },
);

const initialState = {
  address: {
    addressDetail: '',
    jibunAddress: '',
    liName: '',
    locationCode: '',
    roadCode: '',
    myundongName: '',
    roadAddress: '',
    sidoName: '',
    sigunguName: '',
  },
  juso: [],
  error: false,
  loading: false,
};

const addressSlice = createSlice({
  name: 'addresses',
  initialState,
  reducers: {
    selectAddress: (state, action) => {
      state.address.jibunAddress = action.payload.jibunAddr;
      state.address.liName = action.payload.liNm;
      state.address.locationCode = action.payload.lnbrMnnm;
      state.address.roadCode = action.payload.buldMnnm;
      state.address.myundongName = action.payload.emdNm;
      state.address.roadAddress = action.payload.roadAddr;
      state.address.sidoName = action.payload.siNm;
      state.address.sigunguName = action.payload.sggNm;
    },
  },
  extraReducers: {
    [getAddress.pending]: (state) => ({
      ...state,
      error: false,
      loading: true,
    }),
    [getAddress.fulfilled]: (state, { payload }) => ({
      ...state,
      juso: payload.juso,
      error: false,
      loading: false,
    }),
    [getAddress.rejected]: (state) => ({
      ...state,
      error: true,
      loading: false,
    }),
  },
});

export { getAddress };
export const { selectAddress } = addressSlice.actions;
export default addressSlice.reducer;
