import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { pageActions } from "../../store/pageSlice";

export default function Category() {
    let dispatch = useDispatch();
    dispatch((pageActions.setCategory()));
    return (
        <div className='category'>
            Category
        </div>
    )
}
