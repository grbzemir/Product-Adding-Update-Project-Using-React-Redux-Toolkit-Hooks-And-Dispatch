import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ProductCard from '../Components/ProductCard'
import Modal from '../Components/Modal'
import Button from '../Components/Button'
import Input from '../Components/Input'
import { createDataFunction } from '../Redux/dataSlice'
import { modalFunction } from '../Redux/modalSlice'



const Product = () => {


    const { modal } = useSelector((state) => state.modal)
    const { data } = useSelector((state) => state.data)
    const dispatch = useDispatch();
    console.log("Data:", data);
    console.log("Modal State:", modal);
    const [productInfo, setProductInfo] = useState({
        name: "",
        price: "",
        url: ""
    });

    const onChangeFunc = (e, type) => {
        if (type == "url") {

            setProductInfo(prev => ({ ...prev, [e.target.name]: URL.createObjectURL(e.target.files[0]) }))
        }

        else {
            setProductInfo(prev => ({ ...prev, [e.target.name]: e.target.value }))

        }

    }




    const buttonFunc = () => {
        dispatch(createDataFunction(productInfo))
        dispatch(modalFunction())
    }

    const contentModal = (
        <>
            <Input type={"text"} placeholder={"Ürün Ekle"} name={"name"} id={"name"} onChange={e => onChangeFunc(e, "name")} />
            <Input type={"text"} placeholder={"Fiyat Ekle"} name={"price"} id={"price"} onChange={e => onChangeFunc(e, "price")} />
            <Input type={"file"} placeholder={"Resim Ekle"} name={"url"} id={"url"} onChange={e => onChangeFunc(e, "url")} />
            <Button btnText={"Ürün Oluştur"} onClick={buttonFunc} />
        </>
    )
    return (
        <div>
            <div className="flex items-center flex-wrap">
                {
                    data?.map((dt, i) => (
                        <ProductCard key={i} dt={dt} />
                    ))
                }
            </div>
            {modal && <Modal content={contentModal} title={"Ürün Oluştur"} btnText={"Oluştur"} btnFunc={buttonFunc} />}
        </div>
    )
}

export default Product;
