import {Space} from 'antd';
export const shareInfo = [
    {
        value: 5,
        attribute: "Total Shareholders"
    },
    {
        value: 140000,
        attribute: "Total Share"
    },
];
export const shareData=[
	{
		key: '1',
		shareholder: 'Sudip Yadav',
		share: 60000,
	},
	{
		key: '2',
		shareholder: 'Giver Khadka',
		share: 26000,
	},
	{
		key: '3',
		shareholder: 'Nirajan Bhattarai',
		share: 19000,
	},
	{
		key: '4',
		shareholder: 'Sagar Shrestha ',
		share: 25000,
	},
	{
		key: '5',
		shareholder: 'Anish Pokhrel',
		share: 10000,
	},
];
export const shareCol = [
    {
        title: 'SN',
        dataIndex: 'key',
        key: 'sn',
    },
    {
        title: 'Shareholder',
        dataIndex: 'shareholder',
        key: 'shareholder',
    },
    {
        title: 'Share',
        dataIndex: 'share',
        key: 'share',
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