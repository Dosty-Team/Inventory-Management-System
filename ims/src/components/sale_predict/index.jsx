import React, { useEffect, useRef, useState } from "react";
import "./style.scss";
import { DatePicker, message } from 'antd';
import { graphData } from "./graphData";
import {ResponsiveLine} from "@nivo/line";
import InfoCard from "../common/info_card";
import { predicted } from "./predictData";


export default function SalePredict() {
	const DAY = 86400000;
	let startIsSet = useRef(null);
	let endIsSet = useRef(null);
	let dateEnd = useRef(null);
	let selector = useRef(null);
	let [startDate, setStartDate] = useState(new Date());
	let [endDate, setEndDate] = useState(new Date());
	let [currentGraph, setCurrentGraph] = useState([{data: [], id: "A"}]);
	let [pickerValue, setPickerValue] = useState("month");
	let [profitInfo, setProfitInfo] = useState([
		{
			value: 0,
			attribute: "Expected Profit"
		}
	]);
	const [messageApi, contextHolder] = message.useMessage();
	// Show Popup Type Info Alert
	function showMessage(msg){
		messageApi.info(msg);
	};
	useEffect(()=>{
		handlePredict();
	}, []);
	function handleGraph(selected)
	{
		if(selected === "monthly")
		{
			console.log("Handling Monthly predict");
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
				// let newData = graphData[0].data.filter(value => {
				// 	let dataTime = new Date(`${value.x}T00:00:00`);
				// 	let year = dataTime.getFullYear();
				// 	let month = dataTime.getMonth();
				// 	if(year === year && month === month) return true;
				// 	else return false;
				// });
				// Empty graph data structure with respect to the package
				let newData = [{data: [], id: "B"},{data: [], id: "C"},];
				let dataTime = new Date(startDate.getTime());
				while(startDate.getMonth() === dataTime.getMonth())
				{
					let day = dataTime.getDate();
					newData.forEach((currData, i) => {
						if(i === 0){
							currData.data.push({x: `${year}-${month + 1}-${day}`, y: predicted[day - 1]});
						}else {
							currData.data.push({x: `${year}-${month + 1}-${day}`, y: predicted[day - 1] - 3});
						}
					});
					dataTime.setTime(dataTime.getTime() + DAY)			// Increment by 1 day
					console.log(dataTime.getTime());
				}
				return newData;
				console.log(newData);
			});
		}
		else if(selected === "yearly")
		{
			console.log("Handling predict by Year");
			dateEnd.current.classList.add("active");
			setPickerValue("year");
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
	
	function handlePredict()
	{
		console.log("Handling predict");
		let selected = selector.current.value;
		handleGraph(selected);
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
    return <div className="predict">
		{contextHolder}
		<div className="predict__actions flex__row hard__shadow">
			<select defaultValue="monthly" name="timeline" id="predict__time" ref={selector} onChange={handlePredict}>
				<option 
					className="predict__option" 
					value="monthly"
				>
				Monthly predict
				</option>
				<option 
					className="predict__option" 
					value="yearly"
				>
				Yearly
				</option>
			</select>
			<div className="predict__by--date flex__row" >
				<div className="predict__start flex__row">
					<DatePicker className="datepick" picker={pickerValue} onChange={onSelectDate1}/>
				</div>
				<div className="predict__end flex__row" ref={dateEnd}>
					<label htmlFor=""><h3>To</h3></label>
					<DatePicker className="datepick" picker={pickerValue} onChange={onSelectDate2} />
				</div>
				<button className="predict__okay add__btn" onClick={handlePredict}>OK</button>
			</div>
			<InfoCard info={profitInfo}/>
		</div>
		<div className="predict__list hard__shadow">
			<h2>Sales Prediction</h2>
			<div className="predict__graph">
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
						legend: 'amount',
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
		</div>
	</div>;
}
