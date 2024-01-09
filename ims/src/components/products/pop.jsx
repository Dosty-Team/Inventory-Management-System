import React, { useState } from "react";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import "./style.scss";
import axios from "axios";

export default function Pop() {
	const [productName, setProductName] = useState("");
	const [productID, setProductID] = useState("");
	const [category, setCategory] = useState("Electronics");
	const [quantity, setQuantity] = useState(1);
	const [costPrice, setCostPrice] = useState("");
	const [sellingPrice, setSellingPrice] = useState("");
	const [inStock, setInStock] = useState(true);
	const [addedDate, setAddedDate] = useState("");

	const incrementQuantity = () => {
		setQuantity(quantity + 1);
	};

	const decrementQuantity = () => {
		if (quantity > 1) {
			setQuantity(quantity - 1);
		}
	};

	const handleProductInsert = async () => {
		try {
			const newProduct = {
				productName,
				productID,
				qty: quantity,
				category,
				inStock,
				costPrice,
				sellingPrice,
				addedDate,
			};

			const response = await axios.post(
				'http://localhost:5000/v1/addProduct',
				newProduct
			);

			console.log(response.data);
		} catch (error) {
			console.error('Error sending data to MongoDB:', error.message);
		}
	};

	return (
		<div className="product">
			<Popup
				trigger={<button className="add__product add__btn">Add Product</button>}
				position="bottom center"
				modal
			>
				{(close) => (
					<div className="popp__container">
						<div className="popp__box">
							<div className="popp__logo">
								<h1>Add New Product</h1>
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
									Product ID:
									<input
										type="text"
										placeholder="Product ID"
										value={productID}
										onChange={(e) => setProductID(e.target.value)}
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
										onChange={(e) => setAddedDate(e.target.value)}
									/>
								</div>
							</div>
							<button className="popp__box__button__discard" onClick={close}>
								Cancel
							</button>
							<button className="popp__box__button" onClick={handleProductInsert}>
								Add Product
							</button>
						</div>
					</div>
				)}
			</Popup>
		</div>
	);
}
