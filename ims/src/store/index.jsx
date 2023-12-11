import {configureStore} from "@reduxjs/toolkit";
import pageSlice from "./pageSlice";
import userSlice from "./userSlice";

const store = configureStore({
	reducer:{
		page: pageSlice.reducer,
		user: userSlice.reducer
	}
});
export default store;