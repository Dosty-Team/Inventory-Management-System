import React from 'react'
import "./style.scss"
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
import { Link } from 'react-router-dom'
import Login from '../../login'
export default function Sidebar() {
  return (
	<div className='sidebar flex__col'>
		<div className="sidebar__logo flex__row"><img src={logo} alt="IMS Logo" /><h1>IMS</h1></div>
		<ul className="sidebar__menu flex__col">
			<Link to="/">
			<li className="sidebar__menu--option flex__row">
				<div className="sidebar__iconbox">
					<img src={dashboardLogo} alt="" className="option__icon" />
				</div>
				<h3 className="option__name">Dashboard</h3>
			</li>
			</Link>
			<Link to="/product">
			<li className="sidebar__menu--option flex__row">
				
				<div className="sidebar__iconbox">
					<img src={productLogo} alt="" className="option__icon" />
				</div>
				<h3 className="option__name">Products</h3>
			</li>
			</Link>
			<Link to="/category">

			<li className="sidebar__menu--option flex__row">
				<div className="sidebar__iconbox">
					<img src={categoryLogo} alt="" className="option__icon" />
				</div>
				<h3 className="option__name">Category</h3>
			</li>
			</Link>
			<Link to="/sale">
			<li className="sidebar__menu--option flex__row">
				<div className="sidebar__iconbox">
					<img src={salesLogo} alt="" className="option__icon" />
				</div>
				<h3 className="option__name">Sales</h3>
			</li>
			</Link>
			<li className="sidebar__menu--option flex__row">
				<div className="sidebar__iconbox">
					<img src={reportLogo} alt="" className="option__icon" />
				</div>
				<h3 className="option__name">Sales Report</h3>
			</li>
			<li className="sidebar__menu--option flex__row">
				<div className="sidebar__iconbox">
					<img src={predictionLogo} alt="" className="option__icon" />
				</div>
				<h3 className="option__name">Sales Prediction</h3>
			</li>
			<li className="sidebar__menu--option flex__row">
				<div className="sidebar__iconbox">
					<img src={userLogo} alt="" className="option__icon" />
				</div>
				<h3 className="option__name">Manage Users</h3>
			</li>
			<li className="sidebar__menu--option flex__row">
				<div className="sidebar__iconbox">
					<img src={shareLogo} alt="" className="option__icon" />
				</div>
				<h3 className="option__name">Share Distribution</h3>
			</li>
		</ul>
			<Link to="/Login">
		<div className="sidebar__logout  flex__row">

			<div className="sidebar__iconbox">
				<img src={logoutLogo} alt="" className="sidebar__logout--icon" />
			</div>
			<h3 className="sidebar__logout--name">Log Out</h3>
		</div>
			</Link>
	</div>
  )
}
