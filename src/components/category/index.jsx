import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { pageActions } from '../../store/pageSlice';
import InfoCard from '../common/info_card';
import './style.scss';
import { Table, Space } from 'antd';
import { Button, Dialog, DialogTitle, DialogActions, DialogContent, DialogContentText } from '@mui/material';  // Import Material-UI components
import Popcategory from './popcategory';
import axios from 'axios';
import EditCategory from './editCategory';
import { ToastContainer, toast } from 'react-toastify';
import { UseSelector } from 'react-redux';
import { renderActions } from '../../store/renderSlice';

export default function Category() {
  const dispatch = useDispatch();
  //to pass the vlaue of the input box of the index.jsx to the popbox useRef is used here
  const commoncategoryname = useRef(null);
  const [cateinfo, setCateinfo] = useState(null);
  const [categoryData, setCategoryData] = useState(null);
  const [categorydataforactive, setCategorydataforactive] = useState(null);
  const [categoryName, setCategoryName] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(null);  // Track selected category for deletion
  const [openDialog, setOpenDialog] = useState(false);  // State to control the visibility of the delete confirmation dialog
  dispatch(pageActions.setCategory());

  //listen for re-rendering from other components:
  let shouldRender = useSelector((state)=>state.render.shouldRender);

  useEffect(() => {
    try {
      const getCategory = async () => {
        const req = await axios.get('http://localhost:5000/v1/getcats');
        setCategoryData(req.data.allCategory);
        setCateinfo(req.data.CateInfo.totalCategory);
        setCategorydataforactive(req.data.CateInfo.activeCategory);
      };
      getCategory();

      // Check if shouldRender is true before fetching data again
      if (shouldRender) {
        getCategory();

        // After re-fetching data, reset shouldRender to false
        dispatch(renderActions.triggerRender());
      }
    } catch (err) {
      console.log('error while retrieving data in the category component', err);
    }
  }, [shouldRender]);
  const handleEditSuccess = (newName) => {
    setCategoryName(newName);
  };


  const categoryInfo = [
    {
      value: cateinfo,
      attribute: 'Total Categories',
    },
    {
      value: categorydataforactive,
      attribute: 'Active Categories',
    },
  ];

  const categoryCol = [
    {
      title: 'SN',
      dataIndex: 'key',
      key: 'sn',
    },
    {
      title: 'Category',
      dataIndex: 'category',
      key: 'category',
    },
    {
      title: 'Products',
      dataIndex: 'products',
      key: 'products',
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) =>{ 
        console.log("category checking record",record)
        return(
        
        <Space size="middle">
          {/* <a onClick={() => handleEdit(record)}><EditCategory/></a> */}
          <EditCategory category={record} updateCategoryName={handleEditSuccess} />
          <a onClick={() => handleDelete(record)}>Delete</a>
        </Space>
       


       
      )},
    },
  ];
 
  // Function to handle the delete action (open the confirmation dialog)
  const handleDelete = (record) => {
    setSelectedCategory(record);
    setOpenDialog(true);
  };

  // Function to handle the actual deletion when confirmed
  const handleConfirmDelete = async () => {
    try {
      // Perform the deletion logic (make a DELETE request to the server)
      await axios.delete(`http://localhost:5000/v1/deleteCategory/${selectedCategory.key}`);
      
      
      // Close the confirmation dialog
      setOpenDialog(false);
      //re-render table after deletion
      dispatch(renderActions.triggerRender());

    } catch (error) {
      console.error('Error deleting category:', error.response ? error.response.data : error.message);
      // Handle error, show notification, etc.
    }
  };

  // Function to handle canceling the deletion
  const handleCancelDelete = () => {
    setSelectedCategory(null);
    setOpenDialog(false);
  };

  return (
    <div className="category">
      <div className="category__info flex__row">
        <div className="category__add flex__row hard__shadow">
          <input
            type="text"
            placeholder="Category Name"
            className="r"
            ref={commoncategoryname}
            value={categoryName}
            onChange={(e) => setCategoryName(e.target.value)}
          />
          <Popcategory
            inputRef={commoncategoryname}
            updateCategoryName={(newCategoryName) => setCategoryName(newCategoryName)}
          />
        </div>
        <div className="category__info--wrap hard__shadow">
          <InfoCard info={categoryInfo} />
        </div>
      </div>
      <div className="category__list hard__shadow">
        <h2>Categories</h2>
        <Table columns={categoryCol} dataSource={categoryData} />
      </div>

      {/* Delete Confirmation Dialog */}
      <Dialog open={openDialog} onClose={handleCancelDelete}>
        <DialogTitle>Confirm Deletion</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure you want to delete the category: <strong>{selectedCategory?.category}</strong>?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCancelDelete} color="primary">
            Cancel
          </Button>
          <Button onClick={handleConfirmDelete} color="primary">
            Confirm Delete
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
