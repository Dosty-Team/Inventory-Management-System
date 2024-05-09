import React from "react";
import { Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
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
import "./App.scss";

function App() {
	// phasse 1 ko code merge testing to the main branch
	let user = useSelector((state) => state.user.userRole);
	let validUser = useSelector((state) => state.user.isValidUser);
    return (
        <div className="App flex__row">
			{validUser ? 
				<>
					<Sidebar />
					<div className="page__wrapper flex__col">
						<Topbar />
						<div className="page__content">
							<Routes>
								<Route path="/" element={<Dashboard />} />
								<Route path="/product" element={<Product />} />
								<Route path="/category" element={<Category />} />
								<Route path="/sale" element={<Sales />} />
								<Route path="/sale_report" element={<SaleReport />} />
								{user === "admin" && <Route path="/sale_predict" element={<SalePredict />} />}
								{user === "admin" && <Route path="/user_manage" element={<UserManage />} />}
								{user === "admin" && <Route path="/share_dist" element={<ShareDistribution />} />}
							</Routes>
						</div>
					</div>
				</> :
				<>
					<LoginPage/>
				</>
			}
        </div>
    );
}

export default App;
