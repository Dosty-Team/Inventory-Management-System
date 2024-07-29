import {Space} from 'antd';
import { Link } from 'react-router-dom';
import Editpop from './editpop';
import { toast, ToastContainer } from 'react-toastify';
import axios from 'axios';
import { renderActions } from '../../store/renderSlice';
export const userCol = [
 
    {
        title: 'User Name',
        dataIndex: 'username',
        key: 'username',
    },
    {
        title: 'Password',
        dataIndex: 'password',
        key: 'password',
    },
    {
        title: 'Role',
        dataIndex: 'role',
        key: 'role',
    },
    {
        title: 'Action',
        key: 'action',
        render: (_, record) => (
          <Space size="middle">
            <Editpop name={record.username} password={record.password} role={record.role} keyed={record.key}/>
			<Link >Delete</Link>
          </Space>
        ),
      }
];

 
