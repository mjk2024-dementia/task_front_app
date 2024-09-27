import { createSlice } from '@reduxjs/toolkit'; // 1. slice 생성

const initialState = {
  authData: JSON.parse(localStorage.getItem('authData')) || null,
    
  // 2. 초기 상태 정의
  // userName: localStorage.getItem('userName') || null,
  // userImage: localStorage.getItem('userImage')|| null,
  // userToken: localStorage.getItem('userToken') || null,
  // userEmail: localStorage.getItem('userEmail') || null,
};

const authSlice = createSlice({
  // 3 slice 생성
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action) => {
      state.authData = action.payload.authData;
      state.token = action.payload.token;
      // state.userName = action.payload.userName;
      // state.userImage = action.payload.userImage;
      // state.userToken = action.payload.userToken;
      // state.userEmail = action.payload.userEmail;
      localStorage.setItem('authData', JSON.stringify(action.payload.authData));
      // localStorage.setItem('token', action.payload.token);
      // localStorage.setItem('userName', action.payload.userName);
      // localStorage.setItem('userImage', action.payload.userImage);
      // localStorage.setItem('userToken', action.payload.userToken);
      // localStorage.setItem('userEmail', action.payload.userEmail);
    },
    logout: (state) => {
      state.authData = null;
      // state.token = null;
      // state.userName = null;
      // state.userImage = null;
      // state.userToken = null;
      // state.userEmail = null;
      localStorage.removeItem('authData');
      // localStorage.removeItem('token');
      // localStorage.removeItem('userName');
      // localStorage.removeItem('userImage');
      // localStorage.removeItem('userToken');
      // localStorage.removeItem('userEmail');
    },
  },
});

// const a = { abc: 1, def: 2 };
// console.log(a);
// const { abc, def } = a;

// export const authActions = authSlice.actions;
export const { login, logout } = authSlice.actions;
export default authSlice.reducer; // 4. export 된 함수들을 store에 등록