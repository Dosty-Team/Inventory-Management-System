import React, { useEffect, useRef, useState } from "react";
import "./style.scss";
import {useDispatch} from "react-redux";
import { pageActions } from "../../store/pageSlice";
import { Table, DatePicker, message } from 'antd';
import { saleJSON, saleCol } from "./tableData";

export default function Sales() {
	let startIsSet = useRef(null);
	let endIsSet = useRef(null);
	let dateEnd = useRef(null);
	let selector = useRef(null);
	let [startDate, setStartDate] = useState(new Date());
	let [endDate, setEndDate] = useState(new Date());
	let [pickerValue, setPickerValue] = useState("month");
	let [currentTable, setCurrentTable] = useState([]);
	let saleData = JSON.parse(saleJSON);
	const [messageApi, contextHolder] = message.useMessage();
	// Show Popup Type Info Alert
	function showMessage(msg){
		messageApi.info(msg);
	};
	// Run sale handeling once
	let dispatch = useDispatch();
	useEffect(()=>{
		handleSales();
		dispatch((pageActions.setSales()));
	}, []);
	function handleSales()
	{
		console.log("Handling Sales");
		let selected = selector.current.value;
		let year, month, day;
		if(selected === "daily")
		{
			dateEnd.current.classList.remove("active");
			setPickerValue("");
			if(startIsSet.current)
			{
				year = startDate.getFullYear();
				month = startDate.getMonth();
				day = startDate.getDate();
			}
			else
			{
				let today = new Date();
				year = today.getFullYear();
				month = today.getMonth();				
				day = today.getDate();				
			}
			setCurrentTable(() => {
				// Filter main data month wise
				let newData = saleData.filter(item => {
					let dateFormat = item.date.replaceAll("/", "-").split(" ")[0];
					let dataTime = new Date(`${dateFormat}T00:00:00`);
					// console.log(dataTime);
					let dataYear = dataTime.getFullYear();
					let dataMonth = dataTime.getMonth();
					let dataDay = dataTime.getDate();
					if(dataYear === year && dataMonth === month && dataDay === day) return true;
					else return false;
				});
				console.log(newData);
				return [...newData];
			});
		}
		else if(selected === "monthly")
		{
			console.log("Handling Monthly Table");
			dateEnd.current.classList.remove("active");
			setPickerValue("month");
			if(startIsSet.current)
			{
				year = startDate.getFullYear();
				month = startDate.getMonth();
			}
			else
			{
				let today = new Date();
				year = today.getFullYear();
				month = today.getMonth();				
			}
			setCurrentTable(() => {
				// Filter main data month wise
				let newData = saleData.filter(item => {
					let dateFormat = item.date.replaceAll("/", "-").split(" ")[0];
					let dataTime = new Date(`${dateFormat}T00:00:00`);
					// console.log(dataTime);
					let dataYear = dataTime.getFullYear();
					let dataMonth = dataTime.getMonth();
					if(dataYear === year && dataMonth === month) return true;
					else return false;
				});
				console.log(newData);
				return [...newData];
			});
		}
		else if(selected === "by__date")
		{
			console.log("Handling Tabel by Date");
			dateEnd.current.classList.add("active");
			setPickerValue("");
			if(startIsSet.current && endIsSet.current)
			{
				// Clone End-Date and Modify for Table
				let tableEndDate = new Date(endDate.getTime());
				tableEndDate.setDate(endDate.getDate() + 1);
				// Get date object and compare date values
				if(startDate <= tableEndDate)
				{
					setCurrentTable(() => {
						// Filter main data, date wise
						let newData = saleData.filter(item => {
							// Create date object according to data and compare
							let dateFormat = item.date.replaceAll("/", "-").split(" ")[0];
							let timeFormat = item.date.split(" ")[1];
							let dataTime = new Date(`${dateFormat}T${timeFormat}`);
							if(dataTime >= startDate && dataTime < tableEndDate) return true;
							else return false;
						});
						console.log("by date error checking",newData);
						console.log(newData);
						return [...newData];
					});
				}
				else
				{
					showMessage("Start Date must come before End Date");
					setCurrentTable([]);
				}
			}
			else setCurrentTable([]);
		}
	}
	function onSelectDate1(date, dateString)
	{
		let roundedDate = new Date(`${dateString}T00:00:00`);
		startIsSet.current = true;
		setStartDate(roundedDate);
	}
	function onSelectDate2(date, dateString)
	{
		let roundedDate = new Date(`${dateString}T00:00:00`);
		endIsSet.current = true;
		setEndDate(roundedDate);
	}
    return <div className="sales">
		{contextHolder}
		<div className="sales__actions flex__row hard__shadow">
			<select defaultValue="monthly" name="timeline" id="sales__time" ref={selector} onChange={handleSales}>
				<option 
					className="sales__option" 
					value="daily"
				>
				Daily Sales
				</option>
				<option 
					className="sales__option" 
					value="monthly"
				>
				Monthly Sales
				</option>
				<option 
					className="sales__option" 
					value="by__date"
				>
				By Date
				</option>
			</select>
			<div className="sales__by--date flex__row">
				<div className="sales__start flex__row">
					{pickerValue ? <DatePicker className="datepick" picker={pickerValue} onChange={onSelectDate1}/> : 
					<DatePicker className="datepick" onChange={onSelectDate1}/> }
				</div>
				<div className="sales__end flex__row"  ref={dateEnd}>
					<label htmlFor=""><h3>To</h3></label>
					<DatePicker className="datepick" onChange={onSelectDate2}/>
				</div>
				<button className="sales__okay add__btn" onClick={handleSales}>OK</button>
			</div>
			<div className="add__sales add__btn flex__row flex__center">Add Sales</div>
		</div>
		<div className="sales__list hard__shadow">
			<h2>Sales</h2>
			<Table dataSource={currentTable} columns={saleCol} />;
		</div>
	</div>;
}
