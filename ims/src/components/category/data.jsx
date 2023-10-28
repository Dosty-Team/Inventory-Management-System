import {Space} from 'antd';
export const categoryInfo = [
    {
        value: 9,
        attribute: "Total Categories"
    },
    {
        value: 8,
        attribute: "Active Categories"
    }
];
export const categoryData=[
    {
        key: "1",
        category: "Electronics",
        products: 19
    },
    {
        key: "2",
        category: "Electronics",
        products: 19
    },
    {
        key: "3",
        category: "Electronics",
        products: 19
    },
    {
        key: "4",
        category: "Electronics",
        products: 19
    },
    {
        key: "5",
        category: "Electronics",
        products: 19
    },
    {
        key: "6",
        category: "Electronics",
        products: 19
    },
    {
        key: "7",
        category: "Electronics",
        products: 19
    },
    {
        key: "8",
        category: "Electronics",
        products: 19
    },
    {
        key: "9",
        category: "Electronics",
        products: 19
    },
    {
        key: "10",
        category: "Electronics",
        products: 19
    },
    {
        key: "11",
        category: "Electronics",
        products: 19
    },
    {
        key: "12",
        category: "Electronics",
        products: 19
    },
    {
        key: "13",
        category: "Electronics",
        products: 19
    },
    {
        key: "14",
        category: "Electronics",
        products: 19
    },
    {
        key: "15",
        category: "Electronics",
        products: 19
    },
    {
        key: "16",
        category: "Electronics",
        products: 19
    },
    {
        key: "17",
        category: "Electronics",
        products: 19
    },
    {
        key: "18",
        category: "Electronics",
        products: 19
    },
    {
        key: "19",
        category: "Electronics",
        products: 19
    },
    {
        key: "20",
        category: "Electronics",
        products: 19
    }
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