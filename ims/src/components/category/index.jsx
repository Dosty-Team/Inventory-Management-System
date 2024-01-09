import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { pageActions } from "../../store/pageSlice";
import InfoCard from '../common/info_card';
import { categoryInfo } from './data';
import "./style.scss"
import { Space, Table } from 'antd';
import { categoryData, categoryCol } from './data';
import Popcategory from './popcategory';


export default function Category() {
    let dispatch = useDispatch();
    dispatch((pageActions.setCategory()));
    return (
        <div className='category'>
            <div className="category__info flex__row">
                <div className="category__add flex__row hard__shadow">
                    <input type="text" placeholder='Category Name' className='r' />
<Popcategory/>                </div>
                <div className="category__info--wrap hard__shadow">
                    <InfoCard info={categoryInfo} />
                </div>
            </div>
            <div className="category__list hard__shadow">
                <h2>Categories</h2>
                <Table columns={categoryCol} dataSource={categoryData} />
            </div>
        </div>
    )
}
