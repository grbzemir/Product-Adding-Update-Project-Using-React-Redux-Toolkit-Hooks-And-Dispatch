import React from 'react'
import { BsThreeDots } from 'react-icons/bs'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteDataFunction, updateDataFunction } from '../Redux/dataSlice';
import { modalFunction } from '../Redux/modalSlice';
import { useNavigate } from 'react-router-dom';
import { sortingDataFunction } from '../Redux/dataSlice'

const ProductCard = ({ dt }) => {

    const [openEdit, setOpenEdit] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const updateFunc = () => {
        dispatch(modalFunction())
        setOpenEdit(false)
        navigate(`/?update=${dt?.id}`)
        // dispatch(updateDataFunction(dt))
    }

    return (
        <div className="w-[200px] h-[200px] relative m-2 rounded-md">
            <img src={dt?.url} className="w-full h-full object-cover rounded-md" alt="" />
            <div className="absolute left-0 bottom-0 bg-indigo-600 text-white w-full">
                <div className="text-lg font-semibold">{dt?.name}</div>
                <div>{dt?.price}</div>
            </div>
            <div onClick={() => setOpenEdit(!openEdit)} className="absolute top-0 right-0">
                <BsThreeDots color="white" size={24} />
            </div>
            {
                openEdit && (
                    <div className="bg-black border border-white text-white absolute top-0 right-2">
                        <div onClick={() => dispatch(deleteDataFunction(dt?.id))} className='cursor-pointer'>Sil</div>
                        <div onClick={updateFunc} className='cursor-pointer'>Güncelle</div>
                    </div>
                )
            }
        </div >
    )
}

export default ProductCard
