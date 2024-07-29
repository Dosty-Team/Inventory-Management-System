
 
import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: { isValidUser: true, userRole:"admin"},
  reducers: {
    setValidity(state, action) {
      return { ...state, isValidUser: action.payload };
    },
    setAdmin(state) {
      return { ...state, userRole: "admin" };
    },
    setNormal(state) {
      return { ...state, userRole: "normal" };
    },
    setRole(state, action) { //role ko value lai store garna store banaiyeko ho
      return { ...state, userRole: action.payload };
    },
  },
});

export const userActions = userSlice.actions;
export default userSlice;

export const {setRole} = userSlice.actions;//DESTRUCT GARERA PASSING GAREKO FOR DIRECT COMMUNICATION
// export const { setValidity, setRole, setAdmin, setNormal } = userSlice.actions;

