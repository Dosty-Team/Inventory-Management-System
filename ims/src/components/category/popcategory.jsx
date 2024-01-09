import React, { useState } from 'react';
import Popup from 'reactjs-popup';
import { Button } from 'antd';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import logo from '../../img/sidebar-img/vt-logo.png';
import './style.scss';

export default function Popcategory({ temp }) {
  const [categoryName, setCategoryName] = useState('');
  const [quantity, setQuantity] = useState(1);

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
      // Check if temp is not null before using it
      if (temp !== null) {
		setCategoryName(temp)
        // Use temp value
        console.log('Category Name from parent component:', temp);
      }

      const response = await axios.post('http://localhost:5000/v1/newcat', {
        category: categoryName,
        products: quantity,
      });

      // Show success message using react-toastify
      toast.success(response.data.message);

      // Reset form state
      setCategoryName('');
      setQuantity(1);
    } catch (error) {
      // Show error message using react-toastify
      toast.error('Error adding category');
    }
  };

  return (
    <div className="category">
      <Popup trigger={<button className="add__btn r">Add Category</button>} position="bottom center" modal>
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
                Add Category
              </button>
              <ToastContainer />
            </div>
          </div>
        )}
      </Popup>
    </div>
  );
}
