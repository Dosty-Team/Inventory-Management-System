import React from 'react'
import Logo from "../profound-logo"
import {Link} from "react-router-dom"
import "./style.scss"


export default function SideMenu()
{
	return (
			<div className="side__menu">
				<div className="profound__logo--dashboard">
				<Link
							to={`/`}
							className="linker panel--link"
					>
					<Logo className="profound__logo--panel"/>
				</Link>
				</div>
				<ul className="dashboard__options">
				<Link
							to={`/home_panel`}
							className="linker panel--link"
					>
					<li className='dashboard__list--item'>Home</li>
				</Link>
				<Link
							to={`/about_us_panel`}
							className="linker panel--link"
					>
					<li className='dashboard__list--item'>About Us</li>
				</Link>
				<Link
							to={`/services_panel`}
							className="linker panel--link"
					>
					<li className='dashboard__list--item'>Services</li>
				</Link>
				<Link
							to={`/test_preparation_panel`}
							className="linker panel--link"
					>
					<li className='dashboard__list--item'>Test Preparation</li>
				</Link>
				<Link
							to={`/university_panel`}
							className="linker panel--link"
					>
					<li className='dashboard__list--item'>Universities</li>
				</Link>
				<Link
							to={`/contact_panel`}
							className="linker panel--link"
					>
					<li className='dashboard__list--item'>Contact Us</li>
				</Link>
				<Link
							to={`/australia_panel`}
							className="linker panel--link"
					>
					<li className='dashboard__list--item'>Why Australia</li>
				</Link>
				<Link
							to={`/user_panel`}
							className="linker panel--link"
					>
					<li className='dashboard__list--item'>Admin User</li>
				</Link>
				</ul>
			</div>
	);
}