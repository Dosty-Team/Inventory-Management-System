import React, { useState } from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import axios from 'axios';
import { toast ,ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch } from 'react-redux';
import { renderActions } from '../../store/renderSlice';
const { apiBaseUrl } = require('../../../package.json').config;

export default function EditCategory({ category, updateCategoryName }) {
  const [newCategoryName, setNewCategoryName] = useState(category.category);

  //re-reder table after  edit redux:

  const dispatch = useDispatch();

      
  const handleSaveChanges = async () => {
    try {
      const res = await axios.put(`${apiBaseUrl}/v1/updateCategory/${category.key}`, {
        category: newCategoryName,
      });

      // Use toast.success for success notification
      // toast.success(res.data.message);
      //ToastContainer function uses toast.sucess for the notification in the right side.
      toast.success(res.data.message, { position: 'top-right' })

      updateCategoryName(newCategoryName);
      dispatch(renderActions.triggerRender());

    } catch (error) {
      console.error('Error updating category:', error.response ? error.response.data : error.message);

      // Use toast.error for error notification
      toast.error('Failed to update category. Please try again.');
    }
  };

  return (
    <div className="editCategory">
      <Popup trigger={<a>Edit</a>} position="bottom center" modal>
        {(close) => (
          <div className="popp__container">
            <div className="popp__box">
              <div className="popp__logo">
                <h1>Edit Category</h1>
                <br />
              </div>
              <div className="boxlist">
                <div className="popp__inputname flex__row">
                  Category Name:
                  <input
                    type="text"
                    placeholder="Category Name"
                    value={newCategoryName}
                    onChange={(e) => setNewCategoryName(e.target.value)}
                  />
                </div>
                {/* Add other input fields if needed */}
              </div>
              <button className="popp__box__button__discard" onClick={close}>
                Discard
              </button>
              <button className="popp__box__button" onClick={handleSaveChanges}>
                SAVE
              </button>
              {/* ToastContainer need to be called here, to override the upper layer notification */}
              <ToastContainer/>
            </div>
          </div>
        )}
      </Popup>
    </div>
  );
}
