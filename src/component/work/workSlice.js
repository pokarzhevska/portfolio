import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 1,
}

export const workSlice = createSlice({
  name: 'workID',
  initialState,
  reducers: {
    selPortfolio: (state, action) => {
        state.value = action.payload
    }
  },
})

// Action creators are generated for each case reducer function
export const { selPortfolio } = workSlice.actions;

export const workID = (state) => state.workID.value

export default workSlice.reducer