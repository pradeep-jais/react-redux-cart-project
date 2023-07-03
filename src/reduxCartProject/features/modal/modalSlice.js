import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isModalOpen: false,
};

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openModal: (state) => {
      // console.log(state.isModalOpen);
      state.isModalOpen = true;
    },
    closeModal: (state) => {
      state.isModalOpen = false;
    },
  },
});

export const { openModal, closeModal } = modalSlice.actions;

// console.log(modalSlice);

export default modalSlice.reducer;
