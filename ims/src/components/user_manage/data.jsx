import {Space} from 'antd';
export const userInfo = [
    {
        value: 21,
        attribute: "Total Users"
    },
    {
        value: 6,
        attribute: "Admin"
    },
    {
        value: 15,
        attribute: "Normal"
    },
];
export const userData=[
	{
		key: '1',
		username: 'James Clark',
		password: 'apple123',
		role: 'Normal'
	},
	{
		key: '2',
		username: 'Emma Brown',
		password: 'userpass',
		role: 'Normal'
	},
	{
		key: '3',
		username: 'Alice Johnson',
		password: 'apple123',
		role: 'Admin'
	},
	{
		key: '4',
		username: 'Alice Johnson',
		password: 'securepass',
		role: 'Admin'
	},
	{
		key: '5',
		username: 'Alice Johnson',
		password: 'apple123',
		role: 'Normal'
	},
	{
		key: '6',
		username: 'Emma Brown',
		password: 'userpass',
		role: 'Admin'
	},
	{
		key: '7',
		username: 'Ben Smith',
		password: 'securepass',
		role: 'Normal'
	},
	{
		key: '8',
		username: 'Emma Brown',
		password: 'apple123',
		role: 'Admin'
	},
	{
		key: '9',
		username: 'James Clark',
		password: 'securepass',
		role: 'Admin'
	},
	{
		key: '10',
		username: 'Alice Johnson',
		password: 'userpass',
		role: 'Normal'
	},
	{
		key: '11',
		username: 'Alice Johnson',
		password: 'password123',
		role: 'Normal'
	},
	{
		key: '12',
		username: 'Emma Brown',
		password: 'password123',
		role: 'Admin'
	},
	{
		key: '13',
		username: 'James Clark',
		password: 'userpass',
		role: 'Normal'
	},
	{
		key: '14',
		username: 'Alice Johnson',
		password: 'userpass',
		role: 'Normal'
	},
	{
		key: '15',
		username: 'Ben Smith',
		password: 'userpass',
		role: 'Normal'
	},
	{
		key: '16',
		username: 'Ben Smith',
		password: 'userpass',
		role: 'Normal'
	},
	{
		key: '17',
		username: 'Emma Brown',
		password: 'password123',
		role: 'Normal'
	},
	{
		key: '18',
		username: 'Alice Johnson',
		password: 'securepass',
		role: 'Normal'
	},
	{
		key: '19',
		username: 'Alice Johnson',
		password: 'abc1234',
		role: 'Normal'
	},
	{
		key: '20',
		username: 'Emma Watson',
		password: 'hello123',
		role: 'Normal'
	},	  
	{
		key: '21',
		username: 'Chris Brown',
		password: 'iamchris123',
		role: 'Normal'
	},	  
];
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
            <a>Edit</a>
            <a>Delete</a>
          </Space>
        ),
      }
];