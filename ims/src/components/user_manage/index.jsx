import { useDispatch,  useSelector } from "react-redux";
import { pageActions } from "../../store/pageSlice";
import InfoCard from '../common/info_card';
import "./style.scss"
import { Space, Table } from 'antd';
import { userCol } from './data';
import { useEffect, useState } from "react";
import axios from "axios";
import Editpop from "./editpop";
// import { StoredAuthToken } from "./token";

export default function UserManage() {
    const [userData, setUserData] = useState(null);
    const [userInfo, setUserInfo] = useState(null);
    const [dataUpdated, setDataUpdated] = useState(true);
    const [refresh, setRefresh] = useState(false); // State to trigger refresh
  
    const fetchData = async () => {
      try {
        const responseinfo = await axios.get('http://localhost:5000/v1/getdetails');
        setUserData(responseinfo.data.allUsers);
        setUserInfo(responseinfo.data.userInfo);
        console.log('userInfo data', userInfo);
        console.log('/getdetails chai chalyo hai admin ma', responseinfo.data);
  
        // Set dataUpdated to true when data is updated
        setDataUpdated(false); // Reset to false to avoid continuous requests
  
        // Your logic for handling the response
      } catch (error) {
        console.error(error);
        // Your logic for handling the error
      }
    };
  
    useEffect(() => {
      if (!dataUpdated || !refresh) {
        fetchData();
      }
    }, [refresh, dataUpdated]);
  
    function triggerFetchData() {
        setRefresh(true);
      }
       
    //data ko userInfo lai dynamically using the axios update garera componentdetail vanne object create hai.
    const componentdetail = [
        {
            value: userInfo?userInfo.totalUsers:0,
            attribute: "Total Users"
        },
        {
            value: userInfo?userInfo.adminCount:0,
            attribute: "Admin"
        },
        {
            value: userInfo?userInfo.normalCount:0,
            attribute: "Normal"
        },
    ];
    return (
        <div className='user'>
            {/* <Editpop triggerFetchData={triggerFetchData} /> */}
			<div className="user__info flex__row hard__shadow">
				<InfoCard info={componentdetail}/>
				<button className="add__btn">Add User</button>
			</div>
            <div className="user__list hard__shadow">
                <h2>Users</h2>
                <Table columns={userCol} dataSource={userData} />
            </div>
        </div>
    )
}
 