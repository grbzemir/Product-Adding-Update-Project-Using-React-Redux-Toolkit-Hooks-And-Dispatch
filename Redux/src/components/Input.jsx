import React from 'react'
import PropTypes from 'prop-types'

const Input = ({ value, placeholder, type, id, name, onChange }) => {
    return (
        <input value={value} className="h-10 w-full border rounded-md p-2 outline-none mt-3" placeholder={placeholder} type={type} id={id} name={name} onChange={onChange}></input>
    )
}
Input.propTypes = {
    value: PropTypes.string,
    placeholder: PropTypes.string,
    type: PropTypes.string,
    id: PropTypes.string,
    name: PropTypes.string,
    onChange: PropTypes.func
}

export default Input

