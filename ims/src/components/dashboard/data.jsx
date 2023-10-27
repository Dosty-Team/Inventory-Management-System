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
		title: "Product Summary",
		icon1: supplierIcon,
		attribute1: "No of suppliers",
		icon2: categoryIcon,
		attribute2: "Categories"
	},
	{
		title: "Stakeholder Information",
		icon1: customerIcon,
		attribute1: "Customers",
		icon2: shareholderIcon,
		attribute2: "Shareholders"
	},
	{
		title: "Expense Overview",
		icon1: purchaseIcon,
		attribute1: "Expense",
		icon2: costIcon,
		attribute2: "Cost"
	},

];
// Sample Data for Dashboard in given order: 
// Here, data1 = [sales, admin, product, supplier, customer, purchase]
// Here, data2 = [profit, normal, receive, category, shareholder, cost]
export const data1 = [832, 868, 49, 10, 300, 106]; 
export const data2 = [204, 24, 10, 4, 2110, 4320]; 