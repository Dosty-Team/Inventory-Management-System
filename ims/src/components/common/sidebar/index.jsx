import React from 'react'
import "./style.scss"
import {useDispatch, useSelector} from "react-redux"
import { userActions } from '../../../store/userSlice'
import logo from "../../../img/sidebar-img/vt-logo.png"
import dashboardLogo from "../../../img/sidebar-img/dashboard.svg"
import productLogo from "../../../img/sidebar-img/products.svg"
import categoryLogo from "../../../img/sidebar-img/category.svg"
import salesLogo from "../../../img/sidebar-img/sales.svg"
import reportLogo from "../../../img/sidebar-img/report.svg"
import predictionLogo from "../../../img/sidebar-img/predict.svg"
import userLogo from "../../../img/sidebar-img/manage-user.svg"
import shareLogo from "../../../img/sidebar-img/share.svg"
import logoutLogo from "../../../img/sidebar-img/logout.svg"
import { HashLink as Link } from "react-router-hash-link";

export default function Sidebar() {
	let dispatch = useDispatch();
	let user = useSelector((state) => state.user.userRole);
	let page = useSelector(state => state.page.pageName);
	function handleLogOut()
	{
		console.log("Logged Out");
		dispatch(userActions.setValidity(false));
	}
  return (
	<div className='sidebar flex__col'>
		<div className="sidebar__logo flex__row"><img src={logo} alt="IMS Logo" /><h1>IMS</h1></div>
		<ul className="sidebar__menu flex__col">
			<Link to={"/"} className='linker'>
				<li className={`sidebar__menu--option flex__row ${page === "Dashboard" && "selected"}`}>
					<div className="sidebar__iconbox">
						<img src={dashboardLogo} alt="" className="option__icon" />
					</div>
					<h3 className="option__name">Dashboard</h3>
				</li>
			</Link>
			<Link to={"/product"} className='linker'>
				<li className={`sidebar__menu--option flex__row ${page === "Products" && "selected"}`}>
					<div className="sidebar__iconbox">
						<img src={productLogo} alt="" className="option__icon" />
					</div>
					<h3 className="option__name">Products</h3>
				</li>
			</Link>
			<Link to={"/category"} className='linker'>
				<li className={`sidebar__menu--option flex__row ${page === "Category" && "selected"}`}>
					<div className="sidebar__iconbox">
						<img src={categoryLogo} alt="" className="option__icon" />
					</div>
					<h3 className="option__name">Category</h3>
				</li>
			</Link>
			<Link to={"/sale"} className='linker'>
				<li className={`sidebar__menu--option flex__row ${page === "Sales" && "selected"}`}>
					<div className="sidebar__iconbox">
						<img src={salesLogo} alt="" className="option__icon" />
					</div>
					<h3 className="option__name">Sales</h3>
				</li>
			</Link>
			<Link to={"/sale_report"} className='linker'>
				<li className={`sidebar__menu--option flex__row ${page === "Sales Report" && "selected"}`}>
					<div className="sidebar__iconbox">
						<img src={reportLogo} alt="" className="option__icon" />
					</div>
					<h3 className="option__name">Sales Report</h3>
				</li>
			</Link>
			{user === "admin" && 
			<Link to={"/sale_predict"} className='linker'>
				<li className={`sidebar__menu--option flex__row ${page === "Sales Prediction" && "selected"}`}>
					<div className="sidebar__iconbox">
						<img src={predictionLogo} alt="" className="option__icon" />
					</div>
					<h3 className="option__name">Sales Prediction</h3>
				</li>
			</Link>
			}
			{user === "admin" && 
			<Link to={"/user_manage"} className='linker'>
				<li className={`sidebar__menu--option flex__row ${page === "Manage Users" && "selected"}`}>
					<div className="sidebar__iconbox">
						<img src={userLogo} alt="" className="option__icon" />
					</div>
					<h3 className="option__name">Manage Users</h3>
				</li>
			</Link>
			}
			{user === "admin" && 
			<Link to={"/share_dist"} className='linker'>
				<li className={`sidebar__menu--option flex__row ${page === "Share Distribution" && "selected"}`}>
					<div className="sidebar__iconbox">
						<img src={shareLogo} alt="" className="option__icon" />
					</div>
					<h3 className="option__name">Share Distribution</h3>
				</li>
			</Link>
			}
		</ul>
		<div className="sidebar__logout  flex__row" onClick={handleLogOut}>
			<div className="sidebar__iconbox">
				<img src={logoutLogo} alt="" className="sidebar__logout--icon" />
			</div>
			<h3 className="sidebar__logout--name">Log Out</h3>
		</div>
	</div>
  )
}
