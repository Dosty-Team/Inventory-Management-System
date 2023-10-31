import React from "react";
import "./style.scss";
import { useDispatch, useSelector } from "react-redux";
import { pageActions } from "../../../store/pageSlice";
import user from "../../../img/topbar-img/user.jpg";

export default function Topbar() {
	let currentPage = useSelector(state => state.page.pageName);
	let dispatch = useDispatch();
	// dispatch((pageActions.setCategory()));

    return (
        <div className="topbar flex__row hard__shadow">
            <div className="topbar__pagename">
                <h3>Pages / <span>{currentPage}</span></h3>
            </div>
			<div className="topbar__user flex__row">
				<div className="topbar__user--image">
					<img src={user} alt="User Profile" />
				</div>
				<div className="topbar__user--name flex__row">
					<h3>Username</h3>
					<div className="dropdown__arrow"></div>
				</div>
			</div>
        </div>
    );
}
