import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { openModal } from '../modal/modalSlice';

// Data url
const url = 'https://course-api.com/react-useReducer-cart-project';

const initialState = {
  cartItems: [],
  amount: 10,
  totalPrice: 0,
  isLoading: true,
  isError: false,
};

// Handling Async operation using Redux
export const getCartItems = createAsyncThunk(
  'cart/getCartItems',
  async (arg, thunkAPI) => {
    // console.log(arg); extra parameter

    // console.log(thunkAPI);
    const { dispatch, rejectWithValue, getState, fulfillWithValue } = thunkAPI;

    // console.log(getState());
    // dispatch(openModal());

    try {
      const response = await axios(url);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

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
  extraReducers: (builder) => {
    builder
      .addCase(getCartItems.pending, (state) => {
        console.log('pending');
        state.isLoading = true;
      })
      .addCase(getCartItems.fulfilled, (state, action) => {
        console.log('fulfilled');
        // console.log(action);
        state.isLoading = false;
        state.cartItems = action.payload;
      })
      .addCase(getCartItems.rejected, (state, action) => {
        console.log('rejected :', action.payload);
        state.isLoading = false;
        state.isError = true;
      });
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
