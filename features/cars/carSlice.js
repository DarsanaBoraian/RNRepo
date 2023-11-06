import {createSlice} from '@reduxjs/toolkit';

const initialState = [];

export const carSlice = createSlice({
  //next 3 lines - properties of this slice
  name: 'car',
  initialState,
  reducers: {
    addCar: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const {addCar} = carSlice.actions;

export default carSlice.reducer;
