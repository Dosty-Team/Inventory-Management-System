import React, { useState } from "react";
import Button from "@mui/material/Button";
import Alert from "@mui/material/Alert";
import logo from "../../img/sidebar-img/vt-logo.png";
import { useDispatch } from "react-redux";
import { userActions } from "../../store/userSlice";
import "./logout.scss";
import { setRole } from '../../store/userSlice';
import { useSelector } from 'react-redux';

export default function LogoutPage() {
    const userRole = useSelector(state => state.user.userRole);
    const dispatch = useDispatch();
     
    const handleLogout = () => {
        // Clear user session, reset roles, etc.
        dispatch(userActions.setValidity(false));
    
        // Remove localStorage items
        localStorage.removeItem("authToken") && 
        localStorage.removeItem("roleType")
    };

    return (
        <div className="logout__container">
            <div className="logout__box">
                <div className="logout__logo">
                    <img src={logo} alt="IMS Logo" />
                    <h1>Logout from your account</h1>
                    <br />
                    <p>Are you sure you want to logout?</p>
                </div>
                <Button variant="contained" color="primary" onClick={handleLogout}>
                    Logout
                </Button>

                {/* Display alert after logout */}
                <Alert severity="info">You have been successfully Logged in as {userRole}</Alert>
            </div>
        </div>
    );
}
