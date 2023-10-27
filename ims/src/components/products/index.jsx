import React from 'react';
import "./style.scss";
import { useDispatch, useSelector } from "react-redux";
import { pageActions } from "../../store/pageSlice";
import { productCol, productData } from './data';
import { Table, Space } from 'antd';


export default function Product() {
	let dispatch = useDispatch();
	dispatch((pageActions.setProducts()));
  return (
	<div className='product'>
		<div className="product__inventory flex__row hard__shadow">
			<div className="product__inventory--wrap flex__row">
				<div className="product__inventory--info">
					<h2>14</h2>
					<h3>Categories</h3>
				</div>
				<div className="v__line"></div>
				<div className="product__inventory--info">
					<h2>868</h2>
					<h3>Total Products</h3>
				</div>
				<div className="v__line"></div>
				<div className="product__inventory--info">
					<h2>Rs. 2500</h2>
					<h3>Total Cost</h3>
				</div>
			</div>
			<button className="add__product add__btn">Add Product</button>
		</div>
		<div className="product__list hard__shadow">
			<h2>Products</h2>
			<Table columns={productCol} dataSource={productData}/>
		</div>
	</div>
  )
}
