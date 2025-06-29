import React from 'react'
import { useSelector } from 'react-redux'
import ProductCard from '../Components/ProductCard'
import Modal from '../Components/Modal'

const Product = () => {

    const { modal } = useSelector((state) => state.modal)
    console.log("Modal State:", modal);

    const buttonFunc = () => {
        console.log("Button clicked!");

    }
    return (
        <div>
            <ProductCard />
            {modal && <Modal title={"Gif Oluştur"} btnText={"Oluştur"} btnFunc={buttonFunc} />}
        </div>
    )
}

export default Product;
