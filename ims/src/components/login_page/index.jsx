import React, {useEffect} from "react";
import {useDispatch} from "react-redux"
import { userActions } from "../../store/userSlice";

export default function LoginPage() {
	let dispatch = useDispatch();
	// Use Login Form conditions to set user state
	useEffect(() =>{
		// dispatch(userActions.setNormal());			// Set normal role
		dispatch(userActions.setAdmin());			// Set admin role
		// dispatch(userActions.setValidity(false));	// Set user as invalid
		dispatch(userActions.setValidity(true));	// Set user as valid
	}, []);
    return <div>Login Page</div>;
	
}
