import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './reduxCartProject/features/cart/cartSlice';
import modalReducer from './reduxCartProject/features/modal/modalSlice';

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    modal: modalReducer,
  },
});

// console.log(store);
