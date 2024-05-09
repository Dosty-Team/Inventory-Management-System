import React from 'react'
import {Routes, Route} from "react-router-dom"
import Dashboard from "./components/dashboard";
import Sidebar from "./components/common/sidebar"
import Topbar from "./components/common/topbar"
import Product from "./components/products";
import Category from './components/category';
import Sales from './components/sales';
import "./App.scss";
import Login from './components/login';
function App() {
  return (
    <div className="App flex__row">
		{/* i am from the maain branch testing hte merge thing. */}
		{/* iwant to apply the frontend changes to the frontend-1  branch */}
		<Sidebar/>
		<div className="page__wrapper flex__col">
			<Topbar/>
			<div className="page__content">
				<Routes>
					<Route path="/" element={<Dashboard/>}/>
					<Route path="/product" element={<Product/>}/>
					<Route path="/category" element={<Category/>}/>
					<Route path="/sale" element={<Sales/>}/>
					<Route path='/Login' element={<Login/>}/>
				</Routes>
			</div>
		</div>
    </div>
  );
}

export default App;
