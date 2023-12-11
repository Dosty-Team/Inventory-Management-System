import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { pageActions } from "../../store/pageSlice";
import InfoCard from '../common/info_card';
import { userInfo } from './data';
import "./style.scss"
import { Space, Table } from 'antd';
import { userData, userCol } from './data';


export default function UserManage() {
    let dispatch = useDispatch();
	useEffect(()=>{
		dispatch((pageActions.setUser()));
	}, []);
    return (
        <div className='user'>
			<div className="user__info flex__row hard__shadow">
				<InfoCard info={userInfo}/>
				<button className="add__btn">Add User</button>
			</div>
            <div className="user__list hard__shadow">
                <h2>Users</h2>
                <Table columns={userCol} dataSource={userData} />
            </div>
        </div>
    )
}
