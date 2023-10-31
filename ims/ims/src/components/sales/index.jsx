import React from "react";
import "./style.scss";
import { Table, DatePicker } from 'antd';
import { saleData, saleCol } from "./data";

export default function Sales() {
	function handleMonthly()
	{
		let datePicker = document.querySelector(".sales__by--date");
		console.log("Handling Select 1");
		datePicker.classList.remove("active");
	}
	function handleYearly()
	{
		let datePicker = document.querySelector(".sales__by--date");
		console.log("Handling Select 2");
		datePicker.classList.remove("active");
	}
function handleByDate()
{
		let datePicker = document.querySelector(".sales__by--date");
		console.log("Handling Select 3");
		datePicker.classList.add("active");
	}
	function handleDateChange()
	{
		console.log("Handling Date Change");

	}
    return <div className="sales">
		<div className="sales__actions flex__row hard__shadow">
			<select defaultValue="monthly" name="timeline" id="sales__time">
				<option onClick={handleMonthly} id="op1" className="sales__option" value="monthly">Monthly Sales</option>
				<option onClick={handleYearly} className="sales__option" value="yearly">Yearly Sales</option>
				<option onClick={handleByDate} className="sales__option" value="by__date">By Date</option>
			</select>
			<div className="sales__by--date flex__row">
				<div className="sales__start flex__row">
					<label htmlFor=""><h3>From</h3></label>
					<DatePicker className="datepick" onChange={handleDateChange} />
				</div>
				<div className="sales__end flex__row">
					<label htmlFor=""><h3>To</h3></label>
					<DatePicker className="datepick" onChange={handleDateChange} />
				</div>
				<button className="sales__okay add__btn">OK</button>
			</div>
			<div className="add__sales add__btn flex__row flex__center">Add Sales</div>
		</div>
		<div className="sales__list hard__shadow">
			<Table dataSource={saleData} columns={saleCol} />;
		</div>
	</div>;
}