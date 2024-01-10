import React, { useEffect, useRef, useState } from 'react';
import "./style.scss";
import { useDispatch, useSelector } from "react-redux";
import { pageActions } from "../../store/pageSlice";
import { productCol, productData, productOverview} from './data';
import { Table, Space } from 'antd';
import InfoCard from "../common/info_card";


export default function Product() {
	let dispatch = useDispatch();
	useEffect(()=>{
		dispatch((pageActions.setProducts()));
	}, []);
	let [page, setPage] = useState(1);
	console.log(page);
  return (
	<div className='product'>
		<div className="product__inventory flex__row hard__shadow">
			<InfoCard info={productOverview}/>
			<button className="add__product add__btn">Add Product</button>
		</div>
		<div className="product__list hard__shadow">
			<h2>Products</h2>
			<Table 
			columns={productCol} 
			dataSource={productData} 
			pagination={{
					onChange(current) {
					setPage(current);
				}
    		}}/>
		</div>
	</div>
  )
}
