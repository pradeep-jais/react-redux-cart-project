import { createSlice } from '@reduxjs/toolkit';
import cartItems from '../../../assets/cartItems';

const initialState = {
  cartItems: cartItems,
  amount: 10,
  totalPrice: 0,
  isLoading: true,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
});

// console.log(cartSlice);

export default cartSlice.reducer;
