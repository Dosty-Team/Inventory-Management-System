import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { pageActions } from "../../store/pageSlice";
import { productCol} from './data';
import { Table, Space } from 'antd';
import InfoCard from "../common/info_card";
import Pop from './pop';
import "./style.scss";
import axios from 'axios';
import { renderActions } from '../../store/renderSlice'; //for re redering through dependecies.
import EditCategory from '../category/editCategory';
import EditProduct from './EditProduct';
import { current } from '@reduxjs/toolkit';
export default function Product() {
	const dispatch = useDispatch();
	const [productData, setProductData] = useState(null);
  const [page, setPage] = useState(1);
  let itemsPerPage =10;
	const [productOverviewd, setProductOverviewd] = useState(null);
  const shouldProductRender =useSelector((state)=>state.render.shouldProductRender);
  useEffect(() => {
    try {
      const fetchData = async () => {
        const response = await axios.get('http://localhost:5000/v1/productin');
        setProductData(response.data.products);
        setProductOverviewd(response.data.productOverview);
        console.log(response.data);
      };
      fetchData();
      if(shouldProductRender){
        fetchData();
        //make the triggerProductPageRender again false
        dispatch(renderActions.triggerProductPageRender());
      }
    } catch (error) {
      console.error('Error fetching data from server:', error.message);
    }
    
  }, [shouldProductRender]);
  dispatch(pageActions.setProducts());
  
  console.log('productpage overview', productOverviewd);
	
// for EditProduct
// const handleEditSuccess = (newName) => {
//   setCategoryName(newName);
// };
const handleEditProduct = (newName) => {
  // Update the product name in the productData state
  const updatedProductData = productData.map((product) => {
    if (product.key === product) {
      return { ...product, productName: newName };
    }
    return product;
  });

  // Set the updated productData state
  setProductData(newName);
};

 const productColumn = [
  {
      title: 'SN',
      dataIndex: 'key',
      key: 'sn',
  },
  {
      title: 'Product Name',
      dataIndex: 'productName',
      key: 'productName',
  },
  {
      title: 'Quantity',
      dataIndex: 'qty',
      key: 'qty',
  },
  {
      title: 'Category',
      dataIndex: 'category',
      key: 'category',
  },
  {
      title: 'In-Stock',
      dataIndex: 'inStock',
      key: 'inStock',
      
  },
  {
      title: 'Cost Price',
      dataIndex: 'costPrice',
      key: 'costPrice',
  },
  {
      title: 'Selling Price',
      dataIndex: 'sellingPrice',
      key: 'sellingPrice',
  },
  {
      title: 'Product Added',
      dataIndex: 'addedDate',
      key: 'addedDate',
  },
  {
      title: 'Action',
      key: 'action',
      // render: (_, record,index) => (
        // <Space size="middle">
          
        //   <EditProduct product={productData[(page - 1) * itemsPerPage + index]} updateProductName={handleEditProduct} />

        //   <a>Delete</a>
        // </Space>
        // ),
        
        render: (_, record, index) => {
          const dataIndex = (page - 1) * itemsPerPage + index;
          console.log('Data Index:', dataIndex);
          console.log('Product Data:', productData);
          console.log('Accessed Product:', productData[dataIndex]);
          const obj = productData[dataIndex];
          return (
            <Space size="middle">
              <EditProduct product={obj} updateProductName={handleEditProduct} />
              <a>Delete</a>
            </Space>
          );
        },
      }];
      
  return (
	<div className='product'>
		<div className="product__inventory flex__row hard__shadow">
			<InfoCard info={productOverviewd}/>
			<Pop/>
			</div>
		<div className="product__list hard__shadow">
			<h2>Products</h2>
			<Table columns={productCol} dataSource={productData}/>
		</div>
	</div>
  )
}
