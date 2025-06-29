import React from 'react'
import PostAddIcon from '@mui/icons-material/PostAdd';
import { useDispatch } from 'react-redux';
import { modalFunction } from '../Redux/modalSlice';

const Header = () => {

    const dispatch = useDispatch();

    return (
        <div className="flex items-center justify-between bg-indigo-600 text-white px-4  py-3">
            <div className="text-3xl">Gif Upload Project</div>
            <div className="flex items-center gap-5">
                <div className="text-black">
                    <select className="h-10 rounded-lg" name="" id="">
                        <option value="asc">Artan</option>
                        <option value="desc">Azalan</option>
                    </select>
                </div>
                <input className="h-10 rounded-lg px-4" type="text" placeholder='Arama Yapınız...' />
                <div onClick={() => dispatch(modalFunction())} className="bg-indigo-800 w-10 h-10 rounded-full flex items-center justify-center cursor-pointer">
                    <PostAddIcon size={24} />
                </div>
            </div>
        </div >
    )
}

export default Header
