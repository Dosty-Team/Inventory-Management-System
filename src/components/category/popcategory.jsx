import React, { useEffect, useState } from 'react';
import Popup from 'reactjs-popup';
import { Button } from 'antd';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import logo from '../../img/sidebar-img/vt-logo.png';
import './style.scss';
import { useDispatch } from 'react-redux';
import { renderActions } from '../../store/renderSlice';
const { apiBaseUrl } = require('../../../package.json').config;
export default function Popcategory({ inputRef }) {
  //for reredering using redux:
  const dispatch = useDispatch();

  // Ensure inputRef.current is not null or undefined
  const val = (inputRef && inputRef.current) ? inputRef.current.value : '';
  const [categoryName, setCategoryName] = useState(val);
  const [quantity, setQuantity] = useState(1);

  // Update the state when the inputRef value changes
  useEffect(() => {
    // Ensure inputRef.current is not null or undefined
    if (inputRef && inputRef.current) {
      setCategoryName(inputRef.current.value);
    }
  }, [val]);

  const incrementQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleAddCategory = async () => {
    try {
      // Check if categoryName is not an empty string
      if (categoryName.trim() !== '') {
        const response = await axios.post(`${apiBaseUrl}/v1/newcat`, {
          category: categoryName,
          products: quantity,
        });

        // Show success message using react-toastify
        toast.success(response.data.message);
        dispatch(renderActions.triggerRender());//true

        // Reset form state
        setCategoryName('');
        setQuantity(1);
      } else {
        // Show a message indicating that the category name is required
        toast.error('Category Name is required.');
      }
    } catch (error) {
      // Show error message using react-toastify
      toast.error('Error adding category');
    }
  };

  return (
    <div className="category">
      <Popup trigger={<button className="add__btn r" >Add Category</button>} position="bottom center" modal>
        {(close) => (
          <div className="popp__container">
            <div className="popp__box">
              <div className="popp__logo">
                <h1>Add New Product</h1>
                <br />
              </div>
              <div className="boxlist">
                <div className="popp__inputname flex__row">
                  Category Name:
                  <input
                    type="text"
                    placeholder="Category Name"
                    value={categoryName}
                    onChange={(e) => setCategoryName(e.target.value)}
                  />
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
              </div>
              <button className="popp__box__button__discard" onClick={close}>
                Discard
              </button>
              <button className="popp__box__button" onClick={handleAddCategory}>
                Add 
              </button>
              <ToastContainer />
            </div>
          </div>
        )}
      </Popup>
    </div>
  );
}
