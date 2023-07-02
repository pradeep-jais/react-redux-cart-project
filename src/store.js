import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './reduxCartProject/features/cart/cartSlice';

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

console.log(store);
