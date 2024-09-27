import { createSlice } from '@reduxjs/toolkit';  // 1. slice 생성

const modalSlice = createSlice({
  name: 'modal',
  initialState: {
   isOpen: false,
   modalType: 'create', 
   task: null,
  },
  reducers: {
    openModal: (state, action) => {
      state.isOpen = true;
      state.modalType = action.payload.modalType;
      state.task = action.payload.task;
    },
    closeModal: (state) => {
      state.isOpen = false;
    },
  },
});


// export const authActions = authSlice.actions;
export const { openModal, closeModal } = modalSlice.actions;
export default modalSlice.reducer; // 4. export 된 함수들을 store에 등록