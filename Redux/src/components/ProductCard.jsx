import React from 'react';
import PropTypes from 'prop-types';

const ProductCard = ({ dt }) => {
    return (
        <div className="w-[200px] h-[200px] relative m-2 rounded-md">
            <img src={dt?.url} className="w-full h-full absolute rounded-md" alt=""></img>
        </div>
    );
};
ProductCard.propTypes = {
    dt: PropTypes.shape({
        url: PropTypes.string.isRequired
    }).isRequired
};

export default ProductCard;

