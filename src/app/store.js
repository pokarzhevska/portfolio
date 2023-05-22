import { configureStore } from '@reduxjs/toolkit';
import workReducer from '../component/work/workSlice';

export const store = configureStore({
  reducer: {
    workID: workReducer
  },
})