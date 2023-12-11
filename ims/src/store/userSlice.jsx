import {createSlice} from "@reduxjs/toolkit";

const userSlice = createSlice({
	name: "user",
	initialState: {isValidUser: false, userRole: "normal"},
	reducers: {
		setValidity(state, action){return {...state, isValidUser: action.payload}},
		setAdmin(){return {userRole: "admin"};},
		setNormal(){return {userRole: "normal"};},
	}
});
export const userActions = userSlice.actions;
export default userSlice;