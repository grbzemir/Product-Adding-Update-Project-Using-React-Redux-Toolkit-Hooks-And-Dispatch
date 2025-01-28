import React from 'react';
import PropTypes from 'prop-types';
import { BsThreeDots } from 'react-icons/bs';
import { useState } from 'react';

const ProductCard = ({ dt }) => {
    const [openEdit, setOpenEdit] = useState(false);
    return (
        <div className="w-[200px] h-[200px] relative m-2 rounded-md">
            <img src={dt?.url} className="w-full h-full absolute rounded-md" alt=""></img>
            <div className="absolute left-0 bottom-0 bg-indigo-600 text-white w-full">
                <div className="text-lg font-semibold">{dt?.name}</div>
                <div>{dt?.price}</div>
            </div>
            <div onClick={() => setOpenEdit(!openEdit)} className="absolute right-2 top-0">
                <BsThreeDots color='white' size={24} />
            </div>
            {

                openEdit &&
                (
                    <div className="bg-black border border-white text-white">
                        <div>Sil</div>
                        <div>Güncelle</div>
                    </div>
                )

            }
        </div>
    );
};
ProductCard.propTypes = {
    dt: PropTypes.shape({
        url: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired
    }).isRequired
};

export default ProductCard;

