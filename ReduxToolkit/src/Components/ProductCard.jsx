import React from 'react'
import { BsThreeDots } from 'react-icons/bs'

const ProductCard = ({ dt }) => {
    return (
        <div className="w-[200px] h-[200px] relative m-2 rounded-md">
            <img src={dt?.url} className="w-full h-full object-cover rounded-md" alt="" />
            <div className="absolute left-0 bottom-0 bg-indigo-600 text-white w-full">
                <div className="text-lg font-semibold">{dt?.name}</div>
                <div>{dt?.price}</div>
            </div>
            <div className="absolute top-0 right-0">
                <BsThreeDots color="white" size={24} />
            </div>
        </div>
    )
}

export default ProductCard
