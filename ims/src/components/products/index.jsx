import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { pageActions } from "../../store/pageSlice";
import { productCol} from './data';https://github.com/Dosty-Team/Inventory-Management-System.git      console.error('Error fetching data from server:', error.message);
    }
    
  }, [shouldProductRender]);
  dispatch(pageActions.setProducts());
  
  console.log('productpage overview', productOverviewd);
	
// for EditProduct
// const handleEditSuccess = (newName) => {
//   setCategoryName(newName);
// };
const handleEditProduct = (newName, productKey) => {
  // Update the product name in the productData state
  const updatedProductData = productData.map((product) => {
    if (product.key === productKey) {
      return { ...product, productName: newName };
    }
    return product;
  });

  // Set the updated productData state
  setProductData(updatedProductData);
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
      render: (_, record) => (
        <Space size="middle">
          
          <EditProduct product={record} updateProductName={handleEditProduct} />

          <a>Delete</a>
        </Space>
      ),
    }
];
  return (
	<div className='product'>
		<div className="product__inventory flex__row hard__shadow">
			<InfoCard info={productOverviewd}/>
			<Pop/>
			</div>
		<div className="product__list hard__shadow">
			<h2>Products</h2>
			<Table columns={productColumn} dataSource={productData} pagination={{onChange(current){setPage(current);}}}/>
		</div>
	</div>
  )
}
