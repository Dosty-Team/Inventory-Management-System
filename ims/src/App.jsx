import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Dashboard from "./components/dashboard";
import Sidebar from "./components/common/sidebar";
import Topbar from "./components/common/topbar";
import Product from "./components/products";
import Category from "./components/category";
import Sales from "./components/sales";
import SaleReport from "./components/sale_report";
import SalePredict from "./components/sale_predict";
import UserManage from "./components/user_manage";
import LoginPage from "./components/login_page";
import ShareDistribution from "./components/share_dist";
import { userActions } from "./store/userSlice";
import { setRole } from "./store/userSlice";
import "./App.scss";
import LogoutPage from "./components/logout";
// import { StoredAuthToken } from "./components/token";
function App() {
	// phasse 1 ko code merge testing to the main branch
	const dispatch = useDispatch();
	let validUser = useSelector((state) => state.user.isValidUser);	
	let  user = useSelector((state) => state.user.userRole);
	const StoredAuthToken = localStorage.getItem("authToken");
	const StoredRoleType = localStorage.getItem("roleType");
	let check;
	console.log("storeeeeeeed",StoredRoleType)
	if (StoredRoleType && StoredAuthToken) {
		dispatch(setRole(StoredRoleType));
		// dispatch(userActions.setRole(StoredRoleType));
		dispatch(userActions.setValidity(true));
	
		 check = (StoredRoleType || '').toLowerCase();
		// Rest of your code
	}
    return (
        <div className="App flex__row">
			{StoredAuthToken ?  
				<>
					<Sidebar />
					<div className="page__wrapper flex__col">
						<Topbar />
						<div className="page__content">
							<Routes>					
								<Route path='/logout' element={<LogoutPage/>}/>
								<Route path="/" element={<Dashboard />} />
								<Route path="/product" element={<Product />} />
								<Route path="/category" element={<Category />} />
								<Route path="/sale" element={<Sales />} />
								<Route path="/sale_report" element={<SaleReport />} />
								{check == "admin" && <Route path="/sale_predict" element={<SalePredict />} />}
								{check == "admin" && <Route path="/user_manage" element={<UserManage />} />}
								{check == "admin" && <Route path="/share_dist" element={<ShareDistribution />} />}
							</Routes>
						</div>
					</div>
				</> :
				<>
				<Topbar />
					<LoginPage/>
				</>
			}
        </div>
    );
}

export default App;
