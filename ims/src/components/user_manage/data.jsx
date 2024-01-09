import {Space} from 'antd';
import { Link } from 'react-router-dom';
import Editpop from './editpop';
export const userCol = [
    {
        title: 'SN',
        dataIndex: 'key',
        key: 'sn',
    },
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
			<Link to={`/v1/getItem/${record.key}`}>Delete</Link>
          </Space>
        ),
      }
];