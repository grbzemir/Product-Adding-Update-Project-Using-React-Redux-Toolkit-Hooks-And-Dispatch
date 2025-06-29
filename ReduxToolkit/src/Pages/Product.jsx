import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ProductCard from '../Components/ProductCard'
import Modal from '../Components/Modal'
import Button from '../Components/Button'
import Input from '../Components/Input'
import { createDataFunction, updateDataFunction } from '../Redux/dataSlice'
import { modalFunction } from '../Redux/modalSlice'
import { useLocation } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'






const Product = ({ id }) => {


    const { modal } = useSelector((state) => state.modal)
    const { data, keyword } = useSelector((state) => state.data)
    const dispatch = useDispatch();
    const location = useLocation();
    const navigate = useNavigate();
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

    let loc = Number(location?.search.split("=")[1]);


    useEffect(() => {
        if (loc) {
            const selectedProduct = data.find(dt => dt.id === loc); // kesin eşitlik
            if (selectedProduct) {
                setProductInfo(selectedProduct);
            }
        }
    }, [loc, data]);


    console.log(location?.search.split("=")[1], "data");




    const buttonFunc = () => {
        dispatch(createDataFunction({ ...productInfo, id: data.length + 1 }))
        dispatch(modalFunction())
    }


    const buttonUpdateFunc = () => {
        console.log("Güncellenecek Ürün:", productInfo, "id:", loc);
        dispatch(updateDataFunction({ ...productInfo, id: loc }));
        dispatch(modalFunction());
        navigate("/");
    }


    const filteredItems = data.filter(dt =>
        (dt.name?.toLowerCase().includes(keyword?.toLowerCase()) || "")
        ||
        (dt.price?.toString().includes(keyword) || "")
    );


    const contentModal = (
        <>
            <Input value={productInfo.name} type={"text"} placeholder={"Ürün Ekle"} name={"name"} id={"name"} onChange={e => onChangeFunc(e, "name")} />
            <Input value={productInfo.price} type={"text"} placeholder={"Fiyat Ekle"} name={"price"} id={"price"} onChange={e => onChangeFunc(e, "price")} />
            <Input value={productInfo.url} type={"file"} placeholder={"Resim Ekle"} name={"url"} id={"url"} onChange={e => onChangeFunc(e, "url")} />
            <Button btnText={loc ? "Ürün Güncelle" : "Ürün Oluştur"} onClick={loc ? buttonUpdateFunc : buttonFunc} />
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
            {modal && <Modal content={contentModal} title={loc ? "Ürün Güncelle" : "Ürün Oluştur"} />}
        </div>
    )
}

export default Product;
