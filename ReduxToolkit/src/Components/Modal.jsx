import React from 'react'
import { GrClose } from 'react-icons/gr'
import Input from './input'

const Modal = ({ title, content, btnText, btnFunc }) => {

    const [productInfo, setProductInfo] = React.useState({
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

    console.log("Product Info:", productInfo);

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center  bg-opacity-50">
            <div className="w-full max-w-xl bg-white shadow-2xl rounded-2xl p-6">
                <div className="border-b pb-4 mb-4 flex items-center justify-between">
                    <h2 className="text-2xl font-semibold text-gray-800">{title}</h2>
                    <button className="text-gray-500 hover:text-red-500 transition-colors duration-200">
                        <GrClose size={24} />
                    </button>
                </div>
                <Input type={"text"} placeholder={"Ürün Ekle"} name={"name"} id={"name"} onChange={e => onChangeFunc(e, "name")} />
                <Input type={"text"} placeholder={"Fiyat Ekle"} name={"price"} id={"price"} onChange={e => onChangeFunc(e, "price")} />
                <Input type={"file"} placeholder={"Resim Ekle"} name={"url"} id={"url"} onChange={e => onChangeFunc(e, "url")} />
            </div>
        </div>
    )
}

export default Modal;
