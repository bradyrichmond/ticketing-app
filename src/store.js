import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './Tickets/Cart/CartSlice';

export default configureStore({
  reducer: {
    cart: cartReducer
  }
})