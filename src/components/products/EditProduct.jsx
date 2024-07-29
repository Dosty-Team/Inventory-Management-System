import React, { useState } from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch } from 'react-redux';

import { renderActions } from '../../store/renderSlice';
const { apiBaseUrl } = require('../../../package.json').config;
export default function EditProduct({ product, updateProductName }) {
    let productObj = product;
  const [newProductName, setNewProductName] = useState(productObj.productName);
  const [newQuantity, setNewQuantity] = useState(productObj.qty);
  const [newCostPrice, setNewCostPrice] = useState(productObj.costPrice);
  const [newSellingPrice, setNewSellingPrice] = useState(productObj.sellingPrice);

  const dispatch = useDispatch();

  const handleSaveChanges = async () => {
    try {
      const res = await axios.put(`${apiBaseUrl}/v1/updateProduct/${product.key}`, {
        productName: newProductName,
        qty: newQuantity,
        costPrice: newCostPrice,
        sellingPrice: newSellingPrice,
      });

      toast.success(res.data.message, { position: 'top-right' });

      // Update the product name in the parent component
      updateProductName(newProductName);

      // Re-render the table after edit
      dispatch(renderActions.triggerProductPageRender());
    } catch (error) {
      console.error('Error updating product:', error.response ? error.response.data : error.message);

      // Use toast.error for error notification
      toast.error('Failed to update product. Please try again.');
    }
  };
  const handleButton = ()=>{
    console.log("button click huda yo print vaerako xa",productObj.productName ,productObj);
  }

  return (
    <div className="editProduct">
      <Popup trigger={<a >Edit</a>} position="bottom center" modal>
        {() => (
          <div className="popp__container">
            <div className="popp__box">
              <div className="popp__logo">
                <h1>Edit Product</h1>
                <br />
              </div>
              <div className="boxlist">
                <div className="popp__inputname flex__row">
                  Product Name:
                  <input
                    type="text"
                    placeholder="Product Name"
                    value={newProductName}
                    onChange={(e) => setNewProductName(e.target.value)}
                  />
                </div>
                <div className="popp__inputname flex__row">
                  Quantity:
                  <input
                    type="number"
                    placeholder="Quantity"
                    value={newQuantity}
                    onChange={(e) => setNewQuantity(e.target.value)}
                  />
                </div>
                <div className="popp__inputname flex__row">
                  Cost Price:
                  <input
                    type="number"
                    placeholder="Cost Price"
                    value={newCostPrice}
                    onChange={(e) => setNewCostPrice(e.target.value)}
                  />
                </div>
                <div className="popp__inputname flex__row">
                  Selling Price:
                  <input
                    type="number"
                    placeholder="Selling Price"
                    value={newSellingPrice}
                    onChange={(e) => setNewSellingPrice(e.target.value)}
                  />
                </div>
              </div>
              <button className="popp__box__button__discard"  onClick={handleButton}>
                Discard
              </button>
              <button className="popp__box__button" onClick={handleSaveChanges}>
                SAVE CHANGES
              </button>
              {/* ToastContainer to display notifications */}
              <ToastContainer />
            </div>
          </div>
        )}
      </Popup>
    </div>
  );
}
