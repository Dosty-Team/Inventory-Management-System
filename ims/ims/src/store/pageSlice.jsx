import {createSlice} from "@reduxjs/toolkit";

const pageSlice = createSlice({
	name: "page",
	initialState: {pageName: "Dashboard"},
	reducers: {
		setDashboard(){return {pageName: "Dashboard"};},
		setProducts(){return {pageName: "Products"};},
		setCategory(){return {pageName: "Category"};},
		setSales(){return {pageName: "Sales"};},
		setReport(){return {pageName: "Sales Report"};},
		setPredict(){return {pageName: "Sales Prediction"};},
		setUser(){return {pageName: "Mage Users"};},
		setShare(){return {pageName: "Share Distribution"};},
	}
});
export const pageActions = pageSlice.actions;
export default pageSlice;