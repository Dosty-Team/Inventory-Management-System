import React from 'react';
import ReactDOM from 'react-dom/client';
import './sass/_globals.scss';
import './sass/_typography.scss';
import App from './App';
import {BrowserRouter as Router} from "react-router-dom"
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import store from './store';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer,toast} from 'react-toastify';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<Router>
		<Provider store={store}>
			<React.StrictMode>
				<App />
			</React.StrictMode>
		</Provider>
	</Router>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
