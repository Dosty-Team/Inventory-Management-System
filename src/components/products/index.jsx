import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { pageActions } from "../../store/pageSlice";
import { Table, Space, Button, Modal } from 'antd';
import { Dialog, DialogTitle, DialogActions, DialogContent, DialogContentText } from '@mui/material';  // Import Material-UI components
import InfoCard from "../common/info_card";
import Pop from './pop';
import { toast, ToastContainer } from 'react-toastify';
import axios from 'axios';
import { renderActions } from '../../store/renderSlice';
import EditProduct from './EditProduct';
const { apiBaseUrl } = require('../../../package.json').config;

export default function Product() {
   
  const [productData, setProductData] = useState([]);
  const [productOverview, setProductOverview] = useState(null);
  
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [deleteModalVisible, setDeleteModalVisible] = useState(false);
  const shouldProductRender = useSelector((state) => state.render.shouldProductRender);
  let dispatch = useDispatch();

  useEffect(() => {
	 
		dispatch((pageActions.setProducts()));
	  
    const fetchData = async () => {
      try {
        const response = await axios.get(`${apiBaseUrl}/v1/productin`);
        setProductData(response.data.products);
        setProductOverview(response.data.productOverview);
      } catch (error) {
        console.error('Error fetching data from server:', error.message);
      }
    };


    fetchData(); // Fetch data on component mount

    if (shouldProductRender) {
      fetchData(); // Re-fetch data if shouldProductRender is true
    }
  }, [shouldProductRender]);

  const handleEditProduct = (index, newName) => {
    // Create a copy of productData
    const updatedProductData = [...productData];
    // Update the productName of the product at index
    updatedProductData[index].productName = newName;
    // Set the updated productData
    setProductData(updatedProductData);
    dispatch(renderActions.triggerProductPageRender()); // Dispatch action to reload product page state
  };

  const handleDeleteProduct = (record) => {
    setSelectedProduct(record);
    setDeleteModalVisible(true);
  };

  const handleConfirmDeleteProducts = async () => {
    try {
      // Perform the deletion logic
      let resp = await axios.delete(`${apiBaseUrl}/v1/deleteProduct/${selectedProduct.key}`);
      setDeleteModalVisible(false)
      toast.success(resp.data.message)
      
      dispatch(renderActions.triggerProductPageRender()); // Dispatch action to reload product page state
    } catch (error) {
      console.error('Error deleting product:', error.message);
      toast.error(error.message, 'Please try again.');
    }
  };

  const handleCancelDeleteProducts = () => {
    setSelectedProduct(null);
    setDeleteModalVisible(false);
  };

  const productColumns = [
    // { title: 'SN', dataIndex: 'key', key: 'sn' },
    { title: 'Product Name', dataIndex: 'productName', key: 'productName' },
    { title: 'Quantity', dataIndex: 'qty', key: 'qty' },
    { title: 'Category', dataIndex: 'category', key: 'category' },
    { title: 'In-Stock', dataIndex: 'inStock', key: 'inStock' },
    { title: 'Cost Price', dataIndex: 'costPrice', key: 'costPrice' },
    { title: 'Selling Price', dataIndex: 'sellingPrice', key: 'sellingPrice' },
    { title: 'Product Added', dataIndex: 'addedDate', key: 'addedDate' },
    {
      title: 'Action',
      key: 'action',
      render: (_, record, index) => (
        <Space size="middle">
          <EditProduct
            product={record}
            updateProductName={(newName) => handleEditProduct(index, newName)}
          />
          <Button onClick={() => handleDeleteProduct(record)}>Delete</Button>
        </Space>
      ),
    }
  ];

  return (
      <>
    <div className='product'>
      
      <div className="product__inventory flex__row hard__shadow">
        <InfoCard info={productOverview} />
        <Pop />
      </div>
      <div className="product__list hard__shadow">
        <h2>Products</h2>
        <Table columns={productColumns} dataSource={productData} bordered={true}/>
      </div>
       
      {/* Delete Modal */}
      {/* <Modal
        title={`Delete Product: ${selectedProduct?.productName}`}
        open={deleteModalVisible}
        onOk={handleConfirmDeleteProducts}
        onCancel={handleCancelDeleteProducts}
      >
        <p>Are you sure you want to delete this product?</p>
      </Modal> */}

      {/* Delete Confirmation Dialog */}
      <Dialog open={deleteModalVisible} onClose={handleCancelDeleteProducts}>
        <DialogTitle>Confirm Deletion</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure you want to delete this product: 
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCancelDeleteProducts} color="primary">
            Cancel
          </Button>
          <Button onClick={handleConfirmDeleteProducts} color="primary">
            Confirm Delete
          </Button>
        </DialogActions>
      </Dialog>
      
  <ToastContainer/>
    </div>
      </>
  );
}
