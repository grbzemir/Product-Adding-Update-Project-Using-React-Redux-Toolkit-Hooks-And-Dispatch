import React from 'react'
import { useSelector } from 'react-redux'
import ProductCard from '../Components/ProductCard'


const Product = () => {

    const { modal } = useSelector((state) => state.modal)
    console.log("Modal State:", modal);
    return (
        <div>
            <ProductCard />
            {modal && <modal />}
        </div>
    )
}

export default Product;
