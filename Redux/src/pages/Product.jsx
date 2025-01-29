import React, { useEffect } from 'react'
import ProductCard from '../components/ProductCard'
import { useSelector } from 'react-redux'
import Modal from '../components/Modal'
import Input from '../components/Input'
import Button from '../components/Button'
import { useState } from 'react'
import { createDataFunc, updateDataFunc } from '../redux/dataSlice';
import { useDispatch } from 'react-redux'
import { modalFunc } from '../redux/modalSlice'
import { useLocation } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'



const Product = () => {
    const { modal } = useSelector(state => state.modal);
    const { data } = useSelector(state => state.data);
    const dispatch = useDispatch();
    const location = useLocation();
    const navigate = useNavigate();
    const [productInfo, setProductInfo] = useState({ name: "", price: "", url: "" });


    const onChangeFunc = (e, type) => {
        if (type === "url") {
            setProductInfo(prev => ({ ...prev, [e.target.name]: URL.createObjectURL(e.target.files[0]) }));
        } else if (type === "price") {
            setProductInfo(prev => ({ ...prev, [e.target.name]: Number(e.target.value) }));
        } else {
            setProductInfo(prev => ({ ...prev, [e.target.name]: e.target.value }));
        }
    };

    let loc = location?.search.split('=')[1];

    useEffect(() => {
        if (loc) {
            setProductInfo(data.find(dt => dt.id == loc));
        }
    }, [loc]);


    console.log(location?.search.split('=')[1], "data");
    console.log(data, "data");
    console.log(productInfo, "productInfo");
    console.log(modal, "modal");

    const buttonFunc = () => {
        dispatch(createDataFunc({ ...productInfo, id: data.length + 1 }));
        dispatch(modalFunc());
    };

    const buttonUpdateFunc = () => {
        dispatch(updateDataFunc({ ...productInfo, id: loc }));
        dispatch(modalFunc());
        navigate("/");
    }

    const contentModal = (
        <div>
            <Input
                value={productInfo.name}
                type={"text"}
                placeholder={"Ürün Ekle"}
                name={"name"}
                id={"name"}
                onChange={e => onChangeFunc(e, "name")}
            />
            <Input
                value={productInfo.price}
                type={"text"}
                placeholder={"Fiyat Ekle"}
                name={"price"}
                id={"price"}
                onChange={e => onChangeFunc(e, "price")}
            />
            <Input
                type={"file"}
                placeholder={"Resim Seç"}
                name={"url"}
                id={"url"}
                onChange={e => onChangeFunc(e, "url")}
            />
            <Button
                onClick={loc ? buttonUpdateFunc : buttonFunc}
                btnText={loc ? "Ürün Güncelle" : "Ürün Oluştur"}
            />
        </div>
    );

    const filteredItems = data?.filter(dt => dt.name.toLowerCase().includes(data?.keyword?.toLowerCase() || ""));


    return (
        <div>
            <div className="flex items-center flex-wrap">
                {
                    filteredItems?.map((dt, i) => (
                        <ProductCard key={dt.id} dt={dt} />
                    ))
                }

            </div>

            {modal && <Modal title={loc ? "Ürün Güncelle" : "Ürün Oluştur"} content={contentModal} modalFunc={() => dispatch(modalFunc())} />}
        </div>
    )
}

export default Product
