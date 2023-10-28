import React from 'react'
import {Routes, Route} from "react-router-dom"
import Dashboard from "./components/dashboard";
import Sidebar from "./components/common/sidebar"
import Topbar from "./components/common/topbar"
import Product from "./components/products";
import Login from './components/login';
import "./App.scss";

function App() {
  return (
    <div className="App flex__row">
		<Sidebar/>
		<div className="page__wrapper flex__col">
			<Topbar/>
			<div className="page__content">
				<Routes>
					<Route path="/" element={<Dashboard/>}/>
					<Route path="/product" element={<Product/>}/>
					<Route path="/Login" element={<Login/>}/>
				</Routes>
			</div>
		</div>
    </div>
  );
}

export default App;
