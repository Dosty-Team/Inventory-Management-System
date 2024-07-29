import React, { useEffect, useState } from "react";
import "./style.scss";
import {dashInfo, data1, data2, topSeller, topSellCol} from "./data"
import {latestSell, latestSellCol, recentProduct, productCol} from "./data"
import { useDispatch, useSelector } from "react-redux";
import { pageActions } from "../../store/pageSlice";
import DashCard from "../common/dash_card";
import {Table} from "antd";
import {  getAdminCount, getNormalCount } from "../user_manage/index";
import axios from "axios";
const { apiBaseUrl } = require('../../../package.json').config;

export default  function Dashboard() {
	const dispatch = useDispatch();
    let [dataLoaded, setDataLoaded] = useState(false);
    let [adminCount, setAdminCount] = useState(0);
    let [normalCount, setNormalCount] = useState(0);

    useEffect(() => {
		dispatch(pageActions.setDashboard());

		const fetchData = async () => {
			try {
				dispatch(pageActions.setDashboard());
				const responseinfo = await axios.get(`${apiBaseUrl}/v1/getdetails`);
				const allUsers = responseinfo.data.allUsers;
	
				const adminCount = allUsers.filter(user => user.role === 'admin').length;
				const normalCount = allUsers.filter(user => user.role === 'normal').length;
				getAdminCount= () =>adminCount;
				getNormalCount= () =>normalCount;
				setAdminCount(adminCount);
				setNormalCount(normalCount);
				
	
				setDataLoaded(true);
			} catch (error) {
				console.error(error);
			}
		};
	
		fetchData();
	}, [dispatch]);
	let user = useSelector((state) => state.user.userRole);
	let InfoList = dashInfo.filter((elem, i) => {
		// Only show 1st three data to normal user
		if(user === "normal"){
			if(i < 3) return true;
			else return false;
		}
		else return true;
	}).map((card, i) => {
		return (
		<div className="dashcard__wrapper">
			<DashCard title={card.title} 
				icon1={card.icon1} value1={data1[i]} attribute1={card.attribute1} 
				icon2={card.icon2} value2={data2[i]} attribute2={card.attribute2}
			/>
		</div>);
	});

    return <div className="dashboard">
		<div className="dashboard__info">
			{InfoList}
		</div>
    <div className="dashboard__highlight flex__row">
      <div className="dashboard__highlight--seller hard__shadow">
        <h2>Top Seller</h2>
		<Table dataSource={topSeller} columns={topSellCol} size="small"/>
      </div>
      <div className="dashboard__highlight--latest hard__shadow">
        <h2>Latest Sales</h2>
		<Table dataSource={latestSell} columns={latestSellCol} size="small"/>
      </div>
      <div className="dashboard__highlight--products hard__shadow">
        <h2>Recent Products</h2>
		<Table dataSource={recentProduct} columns={productCol} size="small"/>
      </div>
    </div>
	</div>;
}
