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
    calculateTotal: (state) => {
      let totalAmount = 0;
      let totalPrice = 0;
      state.cartItems.forEach((item) => {
        totalAmount = totalAmount + item.amount;
        totalPrice = totalPrice + item.price * item.amount;
      });
      state.amount = totalAmount;
      state.totalPrice = totalPrice;
    },
  },
});

// console.log(cartSlice);

export const {
  clearCart,
  removeItem,
  increaseAmount,
  decreaseAmount,
  calculateTotal,
} = cartSlice.actions;

export default cartSlice.reducer;
