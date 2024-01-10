import {Space} from "antd";
// Product Table Data 
export const productOverview=[
    {
        value: 14,
        attribute: "Category"
    },
    {
        value: 868,
        attribute: "Total Products"
    },
    {
        value: 2500,
        attribute: "Total Cost"
    },
];

export const productData = [
    {
        key: '1',
        productName: 'Smart Phone',
		// ID not shown in UI, but used in back-end
        productID: 1,
        qty: 11,
        category: 'Electronics',
        inStock: true,
        costPrice: 15000,
        sellingPrice: 20000,
        addedDate: "2023/10/16"
    },
    {
		key: '2',
        productName: 'Earbud',
        productID: 2,
		qty: 5,
        category: 'Electronics',
        inStock: true,
        costPrice: 2300,
        sellingPrice: 2800,
        addedDate: "2023/10/16"
    },
    {
        key: '3',
        productName: 'Smart Phone',
        productID: 3,
		qty: 5,
        category: 'Electronics',
        inStock: false,
        costPrice: 15000,
        sellingPrice: 20000,
        addedDate: "2023/10/16"
    },
    {
        key: '4',
        productName: 'Earbud',
        productID: 4,
		qty: 9,
        category: 'Electronics',
        inStock: true,
        costPrice: 2300,
        sellingPrice: 2800,
        addedDate: "2023/10/16"
    },
    {
        key: '5',
        productName: 'Smart Phone',
        productID: 5,
		qty: 9,
        category: 'Electronics',
        inStock: false,
        costPrice: 15000,
        sellingPrice: 20000,
        addedDate: "2023/10/16"
    },
    {
        key: '6',
        productName: 'Earbud',
        productID: 6,
		qty: 9,
        category: 'Electronics',
        inStock: true,
        costPrice: 2300,
        sellingPrice: 2800,
        addedDate: "2023/10/16"
    },
    {
        key: '7',
        productName: 'Smart Phone',
        productID: 7,
		qty: 9,
        category: 'Electronics',
        inStock: true,
        costPrice: 15000,
        sellingPrice: 20000,
        addedDate: "2023/10/16"
    },
    {
        key: '8',
        productName: 'Earbud',
        productID: 8,
		qty: 9,
        category: 'Electronics',
        inStock: true,
        costPrice: 2300,
        sellingPrice: 2800,
        addedDate: "2023/10/16"
    },
    {
        key: '9',
        productName: 'Smart Phone',
        productID: 9,
		qty: 9,
        category: 'Electronics',
        inStock: true,
        costPrice: 15000,
        sellingPrice: 20000,
        addedDate: "2023/10/16"
    },
    {
        key: '10',
        productName: 'Earbud',
        productID: 10,
		qty: 9,
        category: 'Electronics',
        inStock: false,
        costPrice: 2300,
        sellingPrice: 2800,
        addedDate: "2023/10/16"
    },
    {
        key: '11',
        productName: 'Smart Phone',
        productID: 11,
		qty: 9,
        category: 'Electronics',
        inStock: true,
        costPrice: 15000,
        sellingPrice: 20000,
        addedDate: "2023/10/16"
    },
    {
        key: '12',
        productName: 'Earbud',
        productID: 12,
		qty: 9,
        category: 'Electronics',
        inStock: true,
        costPrice: 2300,
        sellingPrice: 2800,
        addedDate: "2023/10/16"
    },
    {
        key: '13',
        productName: 'Smart Phone',
        productID: 13,
		qty: 9,
        category: 'Electronics',
        inStock: true,
        costPrice: 15000,
        sellingPrice: 20000,
        addedDate: "2023/10/16"
    },
    {
        key: '14',
        productName: 'Earbud',
        productID: 14,
		qty: 9,
        category: 'Electronics',
        inStock: true,
        costPrice: 2300,
        sellingPrice: 2800,
        addedDate: "2023/10/16"
    },
    {
        key: '15',
        productName: 'Smart Phone',
        productID: 15,
		qty: 9,
        category: 'Electronics',
        inStock: true,
        costPrice: 15000,
        sellingPrice: 20000,
        addedDate: "2023/10/16"
    },
    {
        key: '16',
        productName: 'Earbud',
        productID: 16,
		qty: 9,
        category: 'Electronics',
        inStock: true,
        costPrice: 2300,
        sellingPrice: 2800,
        addedDate: "2023/10/16"
    },
    {
        key: '17',
        productName: 'Smart Phone',
        productID: 17,
		qty: 9,
        category: 'Electronics',
        inStock: true,
        costPrice: 15000,
        sellingPrice: 20000,
        addedDate: "2023/10/16"
    },
    {
        key: '18',
        productName: 'Earbud',
        productID: 18,
		qty: 9,
        category: 'Electronics',
        inStock: true,
        costPrice: 2300,
        sellingPrice: 2800,
        addedDate: "2023/10/16"
    },
];
// Product Table Structure
export const productCol = [
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
        render: (_, record, index) => (
          <Space size="middle">
            <a>Edit</a>
            <a>Delete</a>
          </Space>
        ),
      }
];