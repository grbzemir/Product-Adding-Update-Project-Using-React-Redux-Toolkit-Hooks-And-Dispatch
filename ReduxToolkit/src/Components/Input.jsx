import React from 'react';

const Input = ({ placeholder, type = "text", id, name, onChange }) => {
    return (
        <input
            className="h-12 w-full border border-gray-300 rounded-xl px-4 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200 mt-3"
            placeholder={placeholder}
            type={type}
            id={id}
            name={name}
            onChange={onChange}
        />
    );
};

export default Input;
