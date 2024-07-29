import salesIcon from "../../img/dashboard-img/sales.svg";
import profitIcon from "../../img/dashboard-img/profit.svg";
import adminIcon from "../../img/dashboard-img/admin.svg";
import normalIcon from "../../img/dashboard-img/normal.svg";
import productIcon from "../../img/dashboard-img/product.svg";
import receiveIcon from "../../img/dashboard-img/receive.svg";
import supplierIcon from "../../img/dashboard-img/suppliers.svg";
import categoryIcon from "../../img/dashboard-img/categories.svg";
import customerIcon from "../../img/dashboard-img/customer.svg";
import shareholderIcon from "../../img/dashboard-img/share.svg";
import purchaseIcon from "../../img/dashboard-img/purchase.svg";
import costIcon from "../../img/dashboard-img/cost.svg";

export const dashInfo = [
	{
		title: "Sales Overview",
		icon1: salesIcon,
		attribute1: "Sales",
		icon2: profitIcon,
		attribute2: "Profit"
	},
	{
		title: "Expense Overview",
		icon1: purchaseIcon,
		attribute1: "Expense",
		icon2: costIcon,
		attribute2: "Cost"
	},
	{
		title: "Product Summary",
		icon1: supplierIcon,
		attribute1: "No of suppliers",
		icon2: categoryIcon,
		attribute2: "Categories"
	},
	{
		title: "Total Users",
		icon1: adminIcon,
		attribute1: "Admin Users",
		icon2: normalIcon,
		attribute2: "Normal Users"
	},
	{
		title: "Inventory Summary",
		icon1: productIcon,
		attribute1: "Products in Hands",
		icon2: receiveIcon,
		attribute2: "To be received"
	},
	{
		title: "Stakeholder Information",
		icon1: customerIcon,
		attribute1: "Customers",
		icon2: shareholderIcon,
		attribute2: "Shareholders"
	},

];
// Sample Data for Dashboard in given order: 
// Here, data1 = [sales, admin, product, supplier, customer, purchase]
// Here, data2 = [profit, normal, receive, category, shareholder, cost]
export const data1 = [832, 868, 49, 10, 300, 106]; 
export const data2 = [204, 24, 10, 4, 2110, 4320]; 

// Top Seller Table Data
export const topSeller = [
	{
	  key: '1',
	  name: 'Earbud',
	  soldQty: 7,
	  price: 2800,
	},
	{
	  key: '2',
	  name: 'Headphone',
	  soldQty: 4,
	  price: 8000,
	},
	{
	  key: '3',
	  name: 'Earbud',
	  soldQty: 7,
	  price: 2800,
	},
	{
	  key: '4',
	  name: 'Headphone',
	  soldQty: 4,
	  price: 8000,
	},
	{
	  key: '5',
	  name: 'Earbud',
	  soldQty: 7,
	  price: 2800,
	},
	{
	  key: '6',
	  name: 'Headphone',
	  soldQty: 4,
	  price: 8000,
	},
	{
	  key: '7',
	  name: 'Earbud',
	  soldQty: 7,
	  price: 2800,
	},
	{
	  key: '8',
	  name: 'Headphone',
	  soldQty: 4,
	  price: 8000,
	},
	{
	  key: '9',
	  name: 'Earbud',
	  soldQty: 7,
	  price: 2800,
	},
	{
	  key: '10',
	  name: 'Headphone',
	  soldQty: 4,
	  price: 8000,
	},
	{
	  key: '11',
	  name: 'Earbud',
	  soldQty: 7,
	  price: 2800,
	},
	{
	  key: '12',
	  name: 'Headphone',
	  soldQty: 4,
	  price: 8000,
	},
	{
	  key: '13',
	  name: 'Earbud',
	  soldQty: 7,
	  price: 2800,
	},
	{
	  key: '14',
	  name: 'Headphone',
	  soldQty: 4,
	  price: 8000,
	},
	{
	  key: '15',
	  name: 'Earbud',
	  soldQty: 7,
	  price: 2800,
	},
	{
	  key: '16',
	  name: 'Headphone',
	  soldQty: 4,
	  price: 8000,
	},
	{
	  key: '17',
	  name: 'Earbud',
	  soldQty: 7,
	  price: 2800,
	},
	{
	  key: '18',
	  name: 'Headphone',
	  soldQty: 4,
	  price: 8000,
	},
	{
	  key: '19',
	  name: 'Earbud',
	  soldQty: 7,
	  price: 2800,
	},
	{
	  key: '20',
	  name: 'Headphone',
	  soldQty: 4,
	  price: 8000,
	},
	{
	  key: '21',
	  name: 'Earbud',
	  soldQty: 7,
	  price: 2800,
	},
	{
	  key: '22',
	  name: 'Headphone',
	  soldQty: 4,
	  price: 8000,
	},
	{
	  key: '23',
	  name: 'Earbud',
	  soldQty: 7,
	  price: 2800,
	},
	{
	  key: '24',
	  name: 'Headphone',
	  soldQty: 4,
	  price: 8000,
	},
  ];

  export const topSellCol = [
	{
	  title: 'Name',
	  dataIndex: 'name',
	  key: 'name',
	},
	{
	  title: 'Sold Qty',
	  dataIndex: 'soldQty',
	  key: 'soldQty',
	},
	{
	  title: 'Price',
	  dataIndex: 'price',
	  key: 'price',
	},
  ];

// Latest Seller Table Data 
export const latestSell = [
	{
	  key: '1',
	  name: 'Smartwatch',
	  soldQty: 3,
	  date: "2023/10/15",
	  price: 7600,
	},
	{
	  key: '2',
	  name: 'Smartwatch',
	  soldQty: 3,
	  date: "2023/10/15",
	  price: 7600,
	},
	{
	  key: '3',
	  name: 'Smartwatch',
	  soldQty: 3,
	  date: "2023/10/15",
	  price: 7600,
	},
	{
	  key: '4',
	  name: 'Smartwatch',
	  soldQty: 3,
	  date: "2023/10/15",
	  price: 7600,
	},
	{
	  key: '5',
	  name: 'Smartwatch',
	  soldQty: 3,
	  date: "2023/10/15",
	  price: 7600,
	},
	{
	  key: '6',
	  name: 'Smartwatch',
	  soldQty: 3,
	  date: "2023/10/15",
	  price: 7600,
	},
	{
	  key: '7',
	  name: 'Smartwatch',
	  soldQty: 3,
	  date: "2023/10/15",
	  price: 7600,
	},
	{
	  key: '8',
	  name: 'Smartwatch',
	  soldQty: 3,
	  date: "2023/10/15",
	  price: 7600,
	},
	{
	  key: '9',
	  name: 'Smartwatch',
	  soldQty: 3,
	  date: "2023/10/15",
	  price: 7600,
	},
	{
	  key: '10',
	  name: 'Smartwatch',
	  soldQty: 3,
	  date: "2023/10/15",
	  price: 7600,
	},
	{
	  key: '11',
	  name: 'Smartwatch',
	  soldQty: 3,
	  date: "2023/10/15",
	  price: 7600,
	},
	{
	  key: '12',
	  name: 'Smartwatch',
	  soldQty: 3,
	  date: "2023/10/15",
	  price: 7600,
	},
	{
	  key: '13',
	  name: 'Smartwatch',
	  soldQty: 3,
	  date: "2023/10/15",
	  price: 7600,
	},
	{
	  key: '14',
	  name: 'Smartwatch',
	  soldQty: 3,
	  date: "2023/10/15",
	  price: 7600,
	},
	{
	  key: '15',
	  name: 'Smartwatch',
	  soldQty: 3,
	  date: "2023/10/15",
	  price: 7600,
	},
	{
	  key: '16',
	  name: 'Smartwatch',
	  soldQty: 3,
	  date: "2023/10/15",
	  price: 7600,
	},
];
export const latestSellCol = [
	{
	  title: 'Name',
	  dataIndex: 'name',
	  key: 'name',
	},
	{
	  title: 'Sold Qty',
	  dataIndex: 'soldQty',
	  key: 'soldQty',
	},
	{
	  title: 'Date',
	  dataIndex: 'date',
	  key: 'date',
	},
	{
	  title: 'Price',
	  dataIndex: 'price',
	  key: 'price',
	},
  ];

  // Top Seller Table Data
export const recentProduct = [
	{
	  key: '1',
	  name: 'Earbud',
	  qty: 7,
	  price: 2800,
	},
	{
	  key: '2',
	  name: 'Headphone',
	  qty: 4,
	  price: 8000,
	},
	{
	  key: '3',
	  name: 'Earbud',
	  qty: 7,
	  price: 2800,
	},
	{
	  key: '4',
	  name: 'Headphone',
	  qty: 4,
	  price: 8000,
	},
	{
	  key: '5',
	  name: 'Earbud',
	  qty: 7,
	  price: 2800,
	},
	{
	  key: '6',
	  name: 'Headphone',
	  qty: 4,
	  price: 8000,
	},
	{
	  key: '7',
	  name: 'Earbud',
	  qty: 7,
	  price: 2800,
	},
	{
	  key: '8',
	  name: 'Headphone',
	  qty: 4,
	  price: 8000,
	},
	{
	  key: '9',
	  name: 'Earbud',
	  qty: 7,
	  price: 2800,
	},
	{
	  key: '10',
	  name: 'Headphone',
	  qty: 4,
	  price: 8000,
	},
	{
	  key: '11',
	  name: 'Earbud',
	  qty: 7,
	  price: 2800,
	},
	{
	  key: '12',
	  name: 'Headphone',
	  qty: 4,
	  price: 8000,
	},
	{
	  key: '13',
	  name: 'Earbud',
	  qty: 7,
	  price: 2800,
	},
	{
	  key: '14',
	  name: 'Headphone',
	  qty: 4,
	  price: 8000,
	},
	{
	  key: '15',
	  name: 'Earbud',
	  qty: 7,
	  price: 2800,
	},
	{
	  key: '16',
	  name: 'Headphone',
	  qty: 4,
	  price: 8000,
	},
  ];

  export const productCol = [
	{
	  title: 'Name',
	  dataIndex: 'name',
	  key: 'name',
	},
	{
	  title: 'Qty',
	  dataIndex: 'qty',
	  key: 'qty',
	},
	{
	  title: 'Price',
	  dataIndex: 'price',
	  key: 'price',
	},
  ];