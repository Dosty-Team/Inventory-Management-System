import {Space} from "antd";
// Product Table Data 
// Product Table Structure
 const productCol = [
    {
        title: 'SN',
        dataIndex: 'key',
        key: 'sn',
    },
    {
        title: 'Product Name',
        dataIndex: 'productName',
        key: 'productName',
    },
    {
        title: 'Quantity',
        dataIndex: 'qty',
        key: 'qty',
    },
    {
        title: 'Category',
        dataIndex: 'category',
        key: 'category',
    },
    {
        title: 'In-Stock',
        dataIndex: 'inStock',
        key: 'inStock',
        render: (_, record) => (
            <Space size="middle">
              {record.inStock ? "Yes": "No"}
            </Space>
          ),
    },
    {
        title: 'Cost Price',
        dataIndex: 'costPrice',
        key: 'costPrice',
    },
    {
        title: 'Selling Price',
        dataIndex: 'sellingPrice',
        key: 'sellingPrice',
    },
    {
        title: 'Product Added',
        dataIndex: 'addedDate',
        key: 'addedDate',
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