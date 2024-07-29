import React, { useState } from "react";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import { Button } from "antd";
import logo from "../../img/sidebar-img/vt-logo.png";
import "./style.scss";
import { renderActions } from '../../store/renderSlice'; //for re redering through dependecies.
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { toast,ToastContainer } from "react-toastify";

import dayjs from 'dayjs'; 
const { apiBaseUrl } = require('../../../package.json').config;
export default function PopSales() {
	const [quantity, setQuantity] = useState(1);
	const [addedDate, setAddedDate] = useState(dayjs().format('DD/MM/YYYY'));
	const [productName, setProductName] = useState("");
	const [category, setCategory] = useState("Electronics");
 
	const [costPrice, setCostPrice] = useState("");
	const [sellingPrice, setSellingPrice] = useState("");
	const [inStock, setInStock] = useState(true);
	const [manufacturer, setManufacturer] = useState("sony");
	const incrementQuantity = () => {
		setQuantity(quantity + 1);
	};

	const dispatch = useDispatch();
	const decrementQuantity = () => {
		if (quantity > 1) {
			setQuantity(quantity - 1);
		}
	};
	
	const handleProductInsert = async () => {
		try {
			const newProduct = {
				productName,
				qty: quantity,
				category,
				manufacturer,
				inStock,
				costPrice,
				sellingPrice,
				addedDate,
			};

			const response = await axios.post(
				`${apiBaseUrl}/v1/addSale`,
				newProduct
			);


			toast.success(response.data.message);
			console.log(response.data);
			dispatch(renderActions.triggerSalespagePageRender());
			// setShouldProductRender(true);
		} catch (error) {
			console.error('Error sending data to MongoDB:', error.message);
			toast.error("Error sending data.",error.message);
		}
	};
	return (
		<div className="product">
			<Popup
				trigger={<button className="add__product add__btn">Add Sales</button>}
				position="bottom center"
				modal
			>

				{(close) => (
					<div className="popp__container">
						<div className="popp__box">
							<div className="popp__logo">
								<h1>Add New Sales</h1>
								<br />
							</div>
							<div className="boxlist">
								<div className="popp__inputname flex__row">
									Product Name:
									<input
										type="text"
										placeholder="Product Name"
										value={productName}
										onChange={(e) => setProductName(e.target.value)}
									/>
								</div>

								<div className="popp__inputname flex__row">
									Category:
									<select value={category} onChange={(e) => setCategory(e.target.value)}>
										<option value="Electronics">Electronics</option>
										<option value="Clothing">Clothing</option>
										{/* Add more options as needed */}
									</select>
								</div>
								<div className="popp__inputname flex__row">
									Manufacturer:
									<select value={manufacturer} onChange={(e) => setManufacturer(e.target.value)}>
										<option value="sony">sony</option>
										<option value="nike">nike</option>
										{/* Add more options as needed */}
									</select>
								</div>
								<div className="popp__inputname flex__row">
									Quantity:
									<div className="allquat">
										<div className="quantity-control">
											<button className="decrement-button" onClick={decrementQuantity}>
												-
											</button>
											<input type="text" value={quantity} readOnly />
											<button className="increment-button" onClick={incrementQuantity}>
												+
											</button>
										</div>
									</div>
									<br />
								</div>
								<div className="popp__inputname flex__row">
									Cost Price:
									<input
										type="text"
										placeholder="Cost Price"
										value={costPrice}
										onChange={(e) => setCostPrice(e.target.value)}
									/>
								</div>
								<div className="popp__inputname flex__row">
									Selling Price:
									<input
										type="text"
										placeholder="Selling Price"
										value={sellingPrice}
										onChange={(e) => setSellingPrice(e.target.value)}
									/>
								</div>
								<div className="popp__inputname flex__row">
									In Stock:
									<select value={inStock} onChange={(e) => setInStock(e.target.value === "true")}>
										<option value="true">Yes</option>
										<option value="false">No</option>
									</select>
								</div>
								<div className="popp__inputname flex__row">
									Added Date:
																	

									<input
										type="text"
										placeholder="YYYY/MM/DD"
										value={addedDate}
										onChange={(newValue) => {
											setAddedDate(newValue);
										}}
										
									/>


								</div>
							</div>
							<button className="popp__box__button__discard" onClick={close}>
								Cancel
							</button>
							<button className="popp__box__button" onClick={handleProductInsert}>
								Add
							</button>
							<ToastContainer/>
						</div>
					</div>
				)}
			</Popup>
		</div>
	);
}
