import React, { useRef, useState } from "react";
import "./style.scss";
import { Table, DatePicker } from 'antd';
import { saleData, saleCol } from "./data";

export default function Sales() {
	let salesEnd = useRef(null);
	let selector = useRef(null);							
	let [pickerValue, setPickerValue] = useState("month");
	function handleSales()
	{
		console.log("Handling Sales");
		let selected = selector.current.value;
		if(selected === "daily")
		{
			console.log("Handling Daily Report");
		}
		else if(selected === "monthly")
		{
			console.log("Handling Monthly Report");
		}
		else if(selected === "by__date")
		{
			console.log("Handling Report by Date");
		}
	}
    return <div className="sales">
		<div className="sales__actions flex__row hard__shadow">
			<select defaultValue="monthly" name="timeline" id="sales__time" ref={selector}>
				<option 
					className="sales__option" 
					value="daily"
					onClick={()=>{
						salesEnd.current.classList.remove("active");
						setPickerValue("");
					}} 
				>
				Daily Sales
				</option>
				<option 
					className="sales__option" 
					value="monthly"
					onClick={()=>{
						salesEnd.current.classList.remove("active");
						setPickerValue("month");
					}} 
				>
				Monthly Sales
				</option>
				<option 
					className="sales__option" 
					value="by__date"
					onClick={()=>{
						salesEnd.current.classList.add("active");
						setPickerValue("");
					}} 
				>
				By Date
				</option>
			</select>
			<div className="sales__by--date flex__row">
				<div className="sales__start flex__row">
					<DatePicker className="datepick" picker={pickerValue} />
				</div>
				<div className="sales__end flex__row"  ref={salesEnd}>
					<label htmlFor=""><h3>To</h3></label>
					<DatePicker className="datepick" />
				</div>
				<button className="sales__okay add__btn" onClick={handleSales}>OK</button>
			</div>
			<div className="add__sales add__btn flex__row flex__center">Add Sales</div>
		</div>
		<div className="sales__list hard__shadow">
			<h2>Sales</h2>
			<Table dataSource={saleData} columns={saleCol} />;
		</div>
	</div>;
}
