import "./style.scss";
import { useDispatch, useSelector } from "react-redux";
import { pageActions } from "../../store/pageSlice";
import { productCol, productData } from './data';
import { Table, Space } from 'antd';
import React, { useState } from "react";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import { Button } from "antd";
import logo from "../../img/sidebar-img/vt-logo.png";

export default function Product() {
	const [quantity, setQuantity] = useState(1);

	const incrementQuantity = () => {
		setQuantity(quantity + 1);
	};

	const decrementQuantity = () => {
		if (quantity > 1) {
			setQuantity(quantity - 1);
		}
	};
	let dispatch = useDispatch();
	dispatch((pageActions.setProducts()));
	return (
		<div className="product">
			<Popup trigger={<Button>Trigger</Button>} position="bottom center" modal>
				{(close) => (
					<div className="login__container">
						<div className="login__box">
							<div className="login__logo">
								<h1>Add New Product</h1>
								<br />
							</div>
							<div className="boxlist">
								<div className="login__inputname flex__row">
									Product Name:
									<input type="text" placeholder="Product Name" />
								</div>
								<div className="login__inputname flex__row">
									Category:
									<select>
										<option value="option1">Option 1</option>
										<option value="option2">Option 2</option>
										<option value="option3">Option 3</option>
										{/* Add more options as needed */}
									</select>
								</div>
								<div className="login__inputname flex__row">
									Quantity:
									<div className="allquat">

										<div className="quantity-control">
											<button
												className="decrement-button"
												onClick={decrementQuantity}
											>
												-
											</button>
											<input type="text" value={quantity} readOnly />
											<button
												className="increment-button"
												onClick={incrementQuantity}
											>
												+
											</button>
										</div>
									</div>
									<br />
								</div>
								<div className="login__inputname flex__row">
									Buying Price:
									<input type="text" placeholder="Buying Price" />
								</div>
								<div className="login__inputname flex__row">
									Marked Price:
									<input type="text" placeholder="Marked Price" />
								</div>
								<div className="login__inputname flex__row">
									Marked Price:
									<input type="text" placeholder="Marked Price" />
								</div>
								
							</div>
							<button
								className="login__box__button__discard"
								onClick={close}
							>
								Sign In
							</button>
							<button className="login__box__button">Sign In</button>


						</div>
					</div>
				)}
			</Popup>
			<div className="product__inventory flex__row hard__shadow">
			<div className="product__inventory--wrap flex__row">
				<div className="product__inventory--info">
					<h2>14</h2>
					<h3>Categories</h3>
				</div>
				<div className="v__line"></div>
				<div className="product__inventory--info">
					<h2>868</h2>
					<h3>Total Products</h3>
				</div>
				<div className="v__line"></div>
				<div className="product__inventory--info">
					<h2>Rs. 2500</h2>
					<h3>Total Cost</h3>
				</div>
			</div>
			<button className="add__product add__btn">Add Product</button>
			</div>
			<div className="product__list hard__shadow">
				<h2>Products</h2>
				<Table columns={productCol} dataSource={productData}/>
			</div>
		</div>
	);
}
