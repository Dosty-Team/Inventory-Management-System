import {Space} from 'antd';

export const categoryData=[
    {
        key: "1",
        category: "Electronics",
        products: 19
    },
    {
        key: "2",
        category: "Clothings",
        products: 19
    },
    {
        key: "3",
        category: "Electrnoics Accessories",
        products: 19
    },

];
export const categoryCol = [
    {
        title: 'SN',
        dataIndex: 'key',
        key: 'sn',
    },
    {
        title: 'Category',
        dataIndex: 'category',
        key: 'category',
    },
    {
        title: 'Products',
        dataIndex: 'products',
        key: 'products',
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