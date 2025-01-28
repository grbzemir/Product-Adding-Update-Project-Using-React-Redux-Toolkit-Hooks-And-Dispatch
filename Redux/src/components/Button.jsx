import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ onClick, btnText }) => {
    return (
        <button
            className="w-full h-10 bg-indigo-600 text-white flex items-center justify-center mt-4 rounded-md border-none"
            onClick={onClick}
        >
            {btnText}
        </button>
    );
};

Button.propTypes = {
    onClick: PropTypes.func.isRequired,
    btnText: PropTypes.string.isRequired
};

export default Button;
