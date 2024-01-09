import React, { useState } from "react";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import { Button } from "antd";
import logo from "../../img/sidebar-img/vt-logo.png";
import "./style.scss";



export default function PopSales() {
	const [quantity, setQuantity] = useState(1);

	const incrementQuantity = () => {
		setQuantity(quantity + 1);
	};

	const decrementQuantity = () => {
		if (quantity > 1) {
			setQuantity(quantity - 1);
		}
	};
	return (
		<div className="product">
			<Popup trigger={<button className="add__sales add__btn flex__row flex__center">Add Sales</button>

} position="bottom center" modal>
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
									<input type="text" placeholder="Product Name" />
								</div>
								<div className="popp__inputname flex__row">
									Category:
									<select>
										<option value="option1">Option 1</option>
										<option value="option2">Option 2</option>
										<option value="option3">Option 3</option>
										{/* Add more options as needed */}
									</select>
								</div>
								<div className="popp__inputname flex__row">
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
								<div className="popp__inputname flex__row">
									Buying Price:
									<input type="text" placeholder="Buying Price" />
								</div>
								<div className="popp__inputname flex__row">
									Marked Price:
									<input type="text" placeholder="Marked Price" />
								</div>
								<div className="popp__inputname flex__row">
									Marked Price:
									<input type="text" placeholder="Marked Price" />
								</div>
								
							</div>
							<button
								className="popp__box__button__discard"
								onClick={close}
							>
								Sign In
							</button>
							<button className="popp__box__button">Sign In</button>


						</div>
					</div>
				)}
			</Popup>
		</div>
	);
}
