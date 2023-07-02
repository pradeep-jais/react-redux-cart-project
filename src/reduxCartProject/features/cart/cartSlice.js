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
  reducers: {
    clearCart: (state) => {
      state.cartItems = [];
      // return { cartItems: [] };
    },
    removeItem: (state, action) => {
      // console.log(state, action);
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload
      );
    },
    increaseAmount: (state, action) => {
      state.cartItems = state.cartItems.map((item) => {
        if (item.id === action.payload) {
          item.amount++;
        }
        return item;
      });
    },
    decreaseAmount: (state, action) => {
      state.cartItems = state.cartItems.map((item) => {
        if (item.id === action.payload) {
          item.amount--;
        }
        return item;
      });
    },
  },
});

// console.log(cartSlice);

export const { clearCart, removeItem, increaseAmount, decreaseAmount } =
  cartSlice.actions;

export default cartSlice.reducer;
