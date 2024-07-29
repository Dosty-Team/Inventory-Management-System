import { useDispatch } from "react-redux";
import { pageActions } from "../../store/pageSlice";
import InfoCard from '../common/info_card';
import "./style.scss";
import { Table } from 'antd';
import { userCol } from './data';
import { useEffect, useState } from "react";
import axios from "axios";
import { toast, ToastContainer } from 'react-toastify';

const { apiBaseUrl } = require('../../../package.json').config;
let adminCount = 0;
let normalCount = 0;
export default function UserManage() {
    const [userData, setUserData] = useState([]);
    const [userInfo, setUserInfo] = useState({});
    const [dataUpdated, setDataUpdated] = useState(true);
    const [refresh, setRefresh] = useState(false);
    const dispatch = useDispatch();
   
    const fetchData = async () => {
        try {
            const responseinfo = await axios.get(`${apiBaseUrl}/v1/getdetails`);
            setUserData(responseinfo.data.allUsers);
            const allUsers = responseinfo.data.allUsers;

            // Count users based on roles
             adminCount = allUsers.filter(user => user.role === 'admin').length;
             normalCount = allUsers.filter(user => user.role === 'normal').length;
            const totalUsers = allUsers.length;

            setUserInfo({
                totalUsers,
                adminCount,
                normalCount
            });

            // Set dataUpdated to true when data is updated
            setDataUpdated(false); // Reset to false to avoid continuous requests
        } catch (error) {
            console.error(error);
            // Handle the error
        }
    };

    useEffect(() => {
        if (dataUpdated || refresh) {
            fetchData();
        }
        dispatch(pageActions.setUser());
    }, [refresh, dataUpdated, dispatch]);

    function triggerFetchData() {
        setRefresh(true);
    }

    // Create component detail using userInfo
    const componentdetail = [
        {
            value: userInfo.totalUsers || 0,
            attribute: "Total Users"
        },
        {
            value: userInfo.adminCount || 0,
            attribute: "Admin"
        },
        {
            value: userInfo.normalCount || 0,
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
            <ToastContainer/>
        </div>
    );
}
 
export const getAdminCount = () => adminCount;
export const getNormalCount = () => normalCount;