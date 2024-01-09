import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { pageActions } from "../../store/pageSlice";
import { productCol, productData, productOverview} from './data';
import { Table, Space } from 'antd';
import InfoCard from "../common/info_card";
import Pop from './pop';
import "./style.scss";

export default function Product() {
	let dispatch = useDispatch();
	useEffect(()=>{
		dispatch((pageActions.setProducts()));
	},[]);
  return (
	<div className='product'>
		<div className="product__inventory flex__row hard__shadow">
			<InfoCard info={productOverview}/>
			<Pop/>
			</div>
		<div className="product__list hard__shadow">
			<h2>Products</h2>
			<Table columns={productCol} dataSource={productData}/>
		</div>
	</div>
  )
}
