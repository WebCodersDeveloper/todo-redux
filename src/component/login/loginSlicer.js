import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userName: "",
  email: "",
  isLogined: false,
};

const userLogin = createSlice({
  name: 'login',
  initialState: initialState,
  reducers: {
    login: (state, action) => {
      return {
        ...state,
        userName: action.payload.userName,
        email: action.payload.email,
        isLogined: action.payload.isLogined
      };
    },
    logout: (state) => {
        return{
            ...state,
            userName: "",
            email: "",
            isLogined: false
        }
    },
  },
});

export const { login, logout } = userLogin.actions;
export default userLogin.reducer;
