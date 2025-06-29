import React from 'react'
import { GrClose } from 'react-icons/gr'
import { useDispatch } from 'react-redux';
import { modalFunction } from '../Redux/modalSlice';


const Modal = ({ title, content, btnText, btnFunc }) => {

    const dispatch = useDispatch();

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center  bg-opacity-50">
            <div className="w-full max-w-xl bg-white shadow-2xl rounded-2xl p-6">
                <div className="border-b pb-4 mb-4 flex items-center justify-between">
                    <h2 className="text-2xl font-semibold text-gray-800">{title}</h2>
                    <button className="text-gray-500 hover:text-red-500 transition-colors duration-200">
                        <GrClose onClick={() => dispatch(modalFunction())} size={24} />
                    </button>
                </div>
                {content}
            </div>
        </div>
    )
}

export default Modal;
