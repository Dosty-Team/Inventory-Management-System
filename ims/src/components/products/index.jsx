import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { pageActions } from "../../store/pageSlice";
import { productCol, productOverview} from './data';
import { Table, Space } from 'antd';
import InfoCard from "../common/info_card";
import Pop from './pop';
import "./style.scss";
import axios from 'axios';

export default function Product() {
	let dispatch = useDispatch();
	const [productData, setProductData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/v1/productin');
        setProductData(response.data.products);
        console.log(response.data);
      } catch (error) {
        console.error('Error fetching data from server:', error.message);
      }
    };

    fetchData();
    dispatch(pageActions.setProducts());
  }, [dispatch]);

  console.log('productpage productData', productData);
	
  return (
	<div className='product'>
		<div className="product__inventory flex__row hard__shadow">
			<InfoCard info={productOverview}/>
			<Pop/>
			</div>
		<div className="product__list hard__shadow">
			<h2>Products</h2>
			<Table columns={productCol} dataSource={productData}/>
		</div>
	</div>
  )
}
