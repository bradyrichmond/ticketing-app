import { createSlice } from '@reduxjs/toolkit';

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    value: 0
  },
  reducers: {
    setEventTicketCount: (state, action) => {
        state.ticketCount = action.payload
    },
    setCurrentEventId: (state, action) => {
        state.currentEventId = action.payload
    }
  }
})

export const { setEventTicketCount, setCurrentEventId } = cartSlice.actions;

export const selectTicketCount = (state) => state.cart.ticketCount;
export const selectCurrentEventId = (state) => state.cart.currentEventId;

export default cartSlice.reducer;