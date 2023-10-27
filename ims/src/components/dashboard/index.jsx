import React from "react";
import "./style.scss";
import {dashInfo, data1, data2, topSeller, topSellCol} from "./data"
import {latestSell, latestSellCol, recentProduct, productCol} from "./data"
import { useDispatch, useSelector } from "react-redux";
import { pageActions } from "../../store/pageSlice";
import DashCard from "../common/dash_card";
import {Table} from "antd";

export default function Dashboard() {
	let dispatch = useDispatch();
	dispatch((pageActions.setDashboard()));
	let InfoList = dashInfo.map((card, i) => {
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
