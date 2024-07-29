// import React, {useEffect} from "react";
// import {useDispatch} from "react-redux"
// import logo from "../../img/sidebar-img/vt-logo.png";
// import { userActions } from "../../store/userSlice";
// import "./style.scss"
// export default function LoginPage() {
// 	let dispatch = useDispatch();
// 	// This code automatically logs in everytime without validation
// 	// Use Login Form conditions to set validate user
// 	useEffect(() =>{

// 		// dispatch(userActions.setNormal());			// Set normal role
// 		dispatch(userActions.setAdmin());			// Set admin role
// 		// dispatch(userActions.setValidity(false));	// Set user as invalid
// 		dispatch(userActions.setValidity(true));	// Set user as valid
// 	}, []);

//     return (
//     <div className="login__container">
//       <div className="login__box">
//         <div className="login__logo">
//           <img src={logo} alt="IMS Logo" />
//           <h1>Login to your account</h1>
//           <br />
//           <p>Welcome back!Please enter your details</p>
//         </div>
//         <div className="login__inputname">Email:</div>
//         <input type="text" placeholder="Email" />
//         <div className="login__inputname">Password:</div>
//         <input type="password" placeholder="Password" />
//         <button className="login__button">Sign In</button>
//       </div>
//     </div>
//   );
	
// }
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import Alert from "@mui/material/Alert";
import logo from "../../img/sidebar-img/vt-logo.png";
import { userActions } from "../../store/userSlice";
import "./style.scss";
import { collapseClasses } from "@mui/material";
import { setRole } from '../../store/userSlice';
import { useSelector } from 'react-redux';
export default function LoginPage() {
    const dispatch = useDispatch();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loginStatus, setLoginStatus] = useState(null);
    const userRole = useSelector(state => state.user.userRole);
    
    console.log(userRole)
    const handleLogin = async () => {
        try {
            // Replace the URL with your actual login endpoint
            const response = await axios.post("http://localhost:5000/v1/login", {
                username: email,
                password: password,
                
            });
            
            

            if (response.data && response.data.role !== undefined  ) {
                 
                const token = response.data.token;
                
                
                localStorage.setItem("roleType",response.data.role)
                localStorage.setItem("authToken", token); // Store the token or user details
                dispatch(userActions.setValidity(true)); // Set user as valid
                dispatch(setRole(response.data.role));
                localStorage.setItem('token', token);
               	// Set user as valid

            } else {
              console.error("Role not found in the response.");
              // Optionally, set a default role or handle the absence of the role.
            }
            // Replace with your actual success logic
            if (response.data.message === "Login successful as Admin") {
                setLoginStatus(true);
                dispatch(userActions.setValidity(true));
                dispatch(userActions.setAdmin()); // Set admin role or other user properties
            }
            else if  (response.data.message === "Login successful as Normal") {
                setLoginStatus(true);
                                dispatch(userActions.setNormal());		
                                dispatch(userActions.setValidity(true));	// Set user as valid
                // dispatch(userActions.setAdmin()); // Set admin role or other user properties
            }
            else {
                setLoginStatus(false);
                dispatch(userActions.setValidity(false));	// Set user as invalid
            }
  
        } catch (error) {
            // Handle error and set loginStatus accordingly
            console.error("Login error:", error);
            dispatch(userActions.setValidity(false));
            setLoginStatus(false);
        }
    };
  
    console.log("redux role",userRole);

     
    return (
        <div className="login__container">
            <div className="login__box">
                <div className="login__logo">
                    <img src={logo} alt="IMS Logo" />
                    <h1>Login to your account</h1>
                    <br />
                    <p>Welcome back! Please enter your details</p>
                </div>
                <div className="login__inputname">Email:</div>
                <input type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <div className="login__inputname">Password:</div>
                <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <button className="login__button" onClick={handleLogin}>
                    Sign In
                </button>

                {/* Display alert based on login status */}
                {loginStatus !== null   && (
                    <Alert severity={loginStatus ? "success" : "error"}>
                        {loginStatus ? "Login successful!" : "Invalid email or password. Please try again."}
                    </Alert>
                )}
            </div>
        </div>
    );
}
