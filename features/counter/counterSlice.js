import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  value: 0,
};

export const counterSlice = createSlice({
  //next 3 lines - properties of this slice
  name: 'counter',
  initialState,
  reducers: {
    increment: state => {
      state.value += 2;
    },
    decrement: state => {
      state.value -= 3;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

export const {increment, decrement, incrementByAmount} = counterSlice.actions;

export default counterSlice.reducer;
