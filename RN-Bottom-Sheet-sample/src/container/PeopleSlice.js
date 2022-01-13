import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import Axios from 'axios';

export const askPeoples = createAsyncThunk(
  'askPeoples',
  async (pagination) => {
    const {data} = await Axios.get(pagination);
    return {
        peoples: data.results ? data.results : [],
        pagination : data.next,
    }
  },
);

export const peopleSlice = createSlice({
  name: 'peoples',
  initialState: {
    peoples: [],
    isPeoplesLoading: false,
    pagination: 'https://swapi.dev/api/people/',
  },
  extraReducers: {
    [askPeoples.fulfilled]: (state, action) => {
      return {
        ...state,
        peoples: [...state.peoples,...action.payload.peoples],
        pagination: action.payload.pagination,
        isPeoplesLoading : false
      }      
    },
    [askPeoples.pending]: (state, action) => {
      return {
        ...state,
        isPeoplesLoading : true
      }      
    },
    [askPeoples.error]: (state, action) => {
      return {
        ...state,
        isPeoplesLoading : false
      }      
    }
  },
});



export const selectPagination = state => state.peoples.pagination;
export const selectIsPeoplesLoading = state => state.peoples.isPeoplesLoading;
export const selectPeoples = state => state.peoples.peoples;
export default peopleSlice.reducer;
