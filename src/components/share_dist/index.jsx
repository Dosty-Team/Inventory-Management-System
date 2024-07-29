import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { pageActions } from "../../store/pageSlice";
import InfoCard from '../common/info_card';
import { shareInfo } from './data';
import { chartData } from './chartData';
import "./style.scss"
import { ResponsivePie } from '@nivo/pie'
import { Space, Table } from 'antd';
import { shareData, shareCol } from './data';


export default function ShareDistribution() {
	let dispatch = useDispatch();
	useEffect(() =>{
		dispatch((pageActions.setShare()));
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
    return (
        <div className='share'>
			<div className="share__info flex__row hard__shadow">
				<InfoCard info={shareInfo}/>
				<button className="add__btn">Add Shareholder</button>
			</div>
			<div className="share__visual flex__row">
				<div className="share__list hard__shadow">
					<h2>Share Distribution</h2>
					<Table columns={shareCol} dataSource={shareData} />
				</div>
				<div className="share__list hard__shadow">
					<h2>Distribution Chart</h2>
					<div className="share__chart">
					    <ResponsivePie
							data={chartData}
							margin={{ top: 40, right: 150, bottom: 80, left: 150 }}
							innerRadius={0.5}
							padAngle={0.7}
							cornerRadius={3}
							activeOuterRadiusOffset={8}
							borderWidth={1}
							borderColor={{
								from: 'color',
								modifiers: [
									[
										'darker',
										0.2
									]
								]
							}}
							arcLinkLabelsSkipAngle={10}
							arcLinkLabelsTextColor="#333333"
							arcLinkLabelsThickness={2}
							arcLinkLabelsColor={{ from: 'color' }}
							arcLabelsSkipAngle={10}
							arcLabelsTextColor={{
								from: 'color',
								modifiers: [
									[
										'darker',
										2
									]
								]
							}}
							legends={[]}
						/>
					</div>
				</div>
			</div>
        </div>
    )
}
