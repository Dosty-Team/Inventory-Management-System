import React, { useEffect, useRef, useState } from "react";
import "./style.scss";
import { Table, DatePicker, message } from 'antd';
import { reportJSON, reportCol } from "./tableData";
import { graphData } from "./graphData";
import {ResponsiveLine} from "@nivo/line";
import InfoCard from "../common/info_card";

export default function SaleReport() {
	let startIsSet = useRef(null);
	let endIsSet = useRef(null);
	let dateEnd = useRef(null);
	let selector = useRef(null);
	let [startDate, setStartDate] = useState(new Date());
	let [endDate, setEndDate] = useState(new Date());
	let [currentGraph, setCurrentGraph] = useState([{data: [], id: "A"}]);
	let [currentTable, setCurrentTable] = useState({
		tableCalcInfo: [
			{
				value: 0,
				attribute: "Grand Total"
			},
			{
				value: 0,
				attribute: "Profit"
			}
		],
		data: []
	});
	let [pickerValue, setPickerValue] = useState("month");
	let [showGraph, setShowGraph] = useState(true);
	let reportData = JSON.parse(reportJSON);
	const [messageApi, contextHolder] = message.useMessage();
	// Show Popup Type Info Alert
	function showMessage(msg){
		messageApi.info(msg);
	};
	useEffect(()=>{
		handleReport();
	}, [showGraph]);
	function toggleReport()
	{
		setShowGraph(prevShowGraph => !prevShowGraph);
		// handleReport();
	}
	function handleGraph(selected)
	{
		if(selected === "monthly")
		{
			console.log("Handling Monthly Report");
			dateEnd.current.classList.remove("active");
			setPickerValue("month");
			let year, month;
			if(currentGraph[0].data.length === 0)
			{
				let today = new Date();
				year = today.getFullYear();
				month = today.getMonth();				
			}
			else
			{
				year = startDate.getFullYear();
				month = startDate.getMonth();
			}
			setCurrentGraph(prevGraph => {
				// Filter main data month wise
				let newData = graphData[0].data.filter(value => {
					let dataTime = new Date(`${value.x}T00:00:00`);
					let dataYear = dataTime.getFullYear();
					let dataMonth = dataTime.getMonth();
					if(dataYear === year && dataMonth === month) return true;
					else return false;
				});
				console.log(newData);
				return [{...prevGraph[0], data: newData}];
			});
		}
		else if(selected === "by__date")
		{
			console.log("Handling Report by Date");
			dateEnd.current.classList.add("active");
			setPickerValue("");
			if(startIsSet.current && endIsSet.current)
			{
				console.log("Inside If");
				if(startDate <= endDate)
				{
					setCurrentGraph(prevGraph => {
						// Filter main data, date wise
						let newData = graphData[0].data.filter(value => {
							// Create date object according to data and compare
							let dataTime = new Date(`${value.x}T00:00:00`);
							if(dataTime >= startDate && dataTime <= endDate) return true;
							else return false;
						});
						console.log(newData);
						return [{...prevGraph[0], data: newData}];
					});
				}
				else
				{
					showMessage("Start Date must come before End Date");
					setCurrentGraph([{data: [], id: "A"}]);
				}

			}
			else setCurrentGraph([{data: [], id: "A"}]);
		}

	}
	function handleTable(selected)
	{
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
			setCurrentTable(prevTable => {
				// Filter main data month wise
				let updatedTable = prevTable;
				let total = 0, cp = 0;
				let newData = reportData.filter(item => {
					let dateFormat = item.date.replaceAll("/", "-").split(" ")[0];
					let dataTime = new Date(`${dateFormat}T00:00:00`);
					// console.log(dataTime);
					let dataYear = dataTime.getFullYear();
					let dataMonth = dataTime.getMonth();
					let dataDay = dataTime.getDate();
					if(dataYear === year && dataMonth === month && dataDay === day) 
					{
						total += item.total;
						cp += item.cp;
						return true;
					}
					else return false;
				});
				updatedTable.tableCalcInfo[0].value = total;				// Grand Total
				updatedTable.tableCalcInfo[1].value = total - cp;			// Profit
				console.log(newData);
				return {...updatedTable, data: [...newData]};
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
			setCurrentTable(prevTable => {
				// Filter main data month wise
				let updatedTable = prevTable;
				let total = 0, cp = 0;
				let newData = reportData.filter(item => {
					let dateFormat = item.date.replaceAll("/", "-").split(" ")[0];
					let dataTime = new Date(`${dateFormat}T00:00:00`);
					// console.log(dataTime);
					let dataYear = dataTime.getFullYear();
					let dataMonth = dataTime.getMonth();
					if(dataYear === year && dataMonth === month)
					{
						total += item.total;
						cp += item.cp;
						return true;
					}
					else return false;
				});
				console.log(newData);
				updatedTable.tableCalcInfo[0].value = total;				// Grand Total
				updatedTable.tableCalcInfo[1].value = total - cp;			// Profit
				console.log(newData);
				return {...updatedTable, data: [...newData]};
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
					setCurrentTable(prevTable => {
						let updatedTable = prevTable;
						let total = 0, cp = 0;
						// Filter main data, date wise
						let newData = reportData.filter(item => {
							// Create date object according to data and compare
							let dateFormat = item.date.replaceAll("/", "-").split(" ")[0];
							let timeFormat = item.date.split(" ")[1];
							let dataTime = new Date(`${dateFormat}T${timeFormat}`);
							if(dataTime >= startDate && dataTime < tableEndDate) 
							{
								total += item.total;
								cp += item.cp;
								return true;
							}
							else return false;
						});
						console.log("by date error checking",newData);
						updatedTable.tableCalcInfo[0].value = total;				// Grand Total
						updatedTable.tableCalcInfo[1].value = total - cp;			// Profit
						console.log(newData);
						return {...updatedTable, data: [...newData]};
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
	function handleReport()
	{
		console.log("Handling Report");
		let selected = selector.current.value;
		if(showGraph) handleGraph(selected);
		else handleTable(selected);
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
    return <div className="report">
		{contextHolder}
		<div className="report__actions flex__row hard__shadow">
			<select defaultValue="monthly" name="timeline" id="report__time" ref={selector} onChange={handleReport}>
				{!showGraph && 
				<option 
					className="report__option" 
					value="daily" 
					// onClick={()=>{
					// 	dateEnd.current.classList.remove("active");
					// 	setPickerValue("");
					// 	handleReport();
					// }} 
				>
				Daily report
				</option>}
				<option 
					className="report__option" 
					value="monthly"
					// onClick={()=>{
					// 	dateEnd.current.classList.remove("active");
					// 	setPickerValue("month");
					// 	handleReport();
					// }} 
				>
				Monthly report
				</option>
				<option 
					className="report__option" 
					value="by__date"
					// onClick={()=>{
					// 	dateEnd.current.classList.add("active");
					// 	setPickerValue("");
					// 	handleReport();
					// }} 
				>
				By Date
				</option>
			</select>
			<div className="report__by--date flex__row" >
				<div className="report__start flex__row">
					{pickerValue ? <DatePicker className="datepick" picker={pickerValue} onChange={onSelectDate1}/> : 
					<DatePicker className="datepick" onChange={onSelectDate1}/> }
				</div>
				<div className="report__end flex__row" ref={dateEnd}>
					<label htmlFor=""><h3>To</h3></label>
					<DatePicker className="datepick" onChange={onSelectDate2} />
				</div>
				<button className="report__okay add__btn" onClick={handleReport}>OK</button>
			</div>
			<div className="toggle__report add__btn flex__row flex__center" onClick={toggleReport}>{showGraph?"Show Table":"Show Graph"}</div>
		</div>
		<div className="report__list hard__shadow">
			<h2>Sales Report</h2>
			{
				showGraph ?  
				<div className="report__graph">
					<ResponsiveLine
						animate
						colors={() => '#0ab3f9'}
						axisBottom={{
							format: '%b %d',
							legend: 'time',
							legendOffset: -12,
							tickValues: 'every 4 days'
						}}
						axisLeft={{
							legend: 'sales',
							legendOffset: 12
						}}
						curve="monotoneX"
						data={currentGraph}
						// enablePointLabel
						height={400}
						margin={{
							bottom: 60,
							left: 80,
							right: 20,
							top: 20
						}}
						pointBorderColor={{
							from: 'color',
							modifiers: [
							[
								'darker',
								0.3
							]
							]
						}}
						pointBorderWidth={1}
						pointSize={16}
						pointSymbol={function noRefCheck(){}}
						useMesh
						width={900}
						xFormat="time:%Y-%m-%d"
						xScale={{
							format: '%Y-%m-%d',
							precision: 'day',
							type: 'time',
							useUTC: false
						}}
						yScale={{
							type: 'linear'
						}}
					/>
				</div> 
				: 
				<div className="report__table">
					<Table dataSource={currentTable.data} columns={reportCol} />
				</div>
			}
		</div>
		{showGraph ? null: 
		<div className="total__calc hard__shadow">
			<InfoCard info={currentTable.tableCalcInfo}/>
		</div>}
	</div>;
}
