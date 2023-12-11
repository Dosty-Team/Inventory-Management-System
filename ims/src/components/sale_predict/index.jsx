import React, { useEffect, useRef, useState } from "react";
import "./style.scss";
import {useDispatch} from "react-redux";
import { DatePicker, message } from 'antd';
import {ResponsiveLine} from "@nivo/line";
import InfoCard from "../common/info_card";
import { predictedSale, predictedCost, predictedOneYearSale, predictedOneYearCost } from "./predictData";
import { predictedMultiYearSale, predictedMultiYearCost } from "./predictData";
import { pageActions } from "../../store/pageSlice";


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
	let [graphX, setGraphX] = useState({
		formatBottom: "%b %d",
		tick: "every 4 days",
		format: "time:%Y-%m-%d",
		formatScale: "%Y-%m-%d",
		precision: "day",
	});
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
	let dispatch = useDispatch();
	useEffect(()=>{
		handlePredict();
		dispatch((pageActions.setPredict()));
	}, []);
	
	function handleGraph(selected)
	{
		if(selected === "monthly")
		{
			console.log("Handling Monthly predict");
			dateEnd.current.classList.remove("active");
			setPickerValue("month");
			setGraphX({
				formatBottom: "%b %d",
				tick: "every 4 days",
				format: "time:%Y-%m-%d",
				formatScale: "%Y-%m-%d",
				precision: "day",
			});
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
				// Empty graph data structure with respect to the package
				let newData = [{data: [], id: "B"},{data: [], id: "C"},];
				let dataTime = new Date(startDate.getTime());
				dataTime.setDate(1);		// Goto start of the month			
				let total = 0, cp = 0;
				while(startDate.getMonth() === dataTime.getMonth())
				{
					let day = dataTime.getDate();
					// eslint-disable-next-line no-loop-func
					newData.forEach((currData, i) => {
						if(i === 0){
							total += predictedSale[day - 1];
							currData.data.push({x: `${year}-${month + 1}-${day}`, y: predictedSale[day - 1]});
						}else {
							cp += predictedCost[day - 1];
							currData.data.push({x: `${year}-${month + 1}-${day}`, y: predictedCost[day - 1]});
						}
					});
					dataTime.setTime(dataTime.getTime() + DAY)			// Increment by 1 day
					console.log(dataTime.getTime());
				}
				// Calculate Expected Profit
				setProfitInfo(prevInfo => {
					let info = prevInfo;
					info[0].value = Math.round(total - cp);
					return info;
				});
				console.log(newData);
				return newData;
			});
		}
		else if(selected === "yearly")
		{
			console.log("Handling predict by Year");
			dateEnd.current.classList.add("active");
			setPickerValue("year");
			let year;
			if(startIsSet.current && endIsSet.current)
			{
				year = startDate.getFullYear();
				setGraphX({
					formatBottom: "%Y",
					tick: "every 1 years",
					format: "time:%Y",
					formatScale: "%Y",
					precision: "year",
				});
				if(startDate <= endDate)
				{
					setCurrentGraph(prevGraph => {
						let newData = [{data: [], id: "B"},{data: [], id: "C"},];
						let dataTime = new Date(startDate.getTime());
						let total = 0, cp = 0, startIndex = 0;
						while(dataTime.getFullYear() <= endDate.getFullYear())
						{
							year = dataTime.getFullYear();
							// eslint-disable-next-line no-loop-func
							newData.forEach((currData, i) => {
								if(i === 0){
									total += predictedMultiYearSale[startIndex];
									currData.data.push({x: `${year}`, y: predictedMultiYearSale[startIndex]});
								}else {
									cp += predictedMultiYearCost[startIndex];
									currData.data.push({x: `${year}`, y: predictedMultiYearCost[startIndex]});
								}
							});
							startIndex++;
							dataTime.setFullYear(dataTime.getFullYear() + 1);
						}
						// Calculate Expected Profit
						setProfitInfo(prevInfo => {
						let info = prevInfo;
						info[0].value = Math.round(total - cp);
						return info;
					});
					console.log(newData);
					return newData;
					});
				}
				else
				{
					showMessage("Start Date must come before End Date");
					setCurrentGraph([{data: [], id: "A"}]);
				}	
			}
			else
			{
				let today = new Date();
				year = today.getFullYear();
				setGraphX({
					formatBottom: "%Y %b",
					tick: "every 1 months",
					format: "time:%Y-%m",
					formatScale: "%Y-%m",
					precision: "month",
				});
				////////////////// Request 12 months data for current year ///////////////////
				setCurrentGraph(prevGraph => {
					let newData = [{data: [], id: "B"},{data: [], id: "C"},];
					let dataTime = new Date(startDate.getTime());
					dataTime.setMonth(0);		// Goto start of the year			
					let total = 0, cp = 0;
					while(startDate.getFullYear() === dataTime.getFullYear())
					{
						
						let month = dataTime.getMonth();
						// eslint-disable-next-line no-loop-func
						newData.forEach((currData, i) => {
							if(i === 0){
								total += predictedOneYearSale[month];
								currData.data.push({x: `${year}-${month + 1}`, y: predictedOneYearSale[month]});
							}else {
								cp += predictedOneYearCost[month];
								currData.data.push({x: `${year}-${month + 1}`, y: predictedOneYearCost[month]});
							}
						});
						dataTime.setMonth(dataTime.getMonth() + 1);
					}
					// Calculate Expected Profit
					setProfitInfo(prevInfo => {
						let info = prevInfo;
						info[0].value = Math.round(total - cp);
						return info;
					});
					console.log(newData);
					return newData;
				});
			}
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
					colors={['#0ab3f9', '#f36204']}
					axisBottom={{
						format: graphX.formatBottom,
						legend: 'time',
						legendOffset: -12,
						tickValues: graphX.tick
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
					xFormat={graphX.format}
					xScale={{
						format: graphX.formatScale,
						precision: graphX.precision,
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
