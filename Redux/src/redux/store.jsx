import { configureStore } from '@reduxjs/toolkit';
import modalReducer from './modalSlice';
import dataReducer from './dataSlice';

export const store = configureStore({
    reducer: {
        //Redux parametre olarak alındı
        modal: modalReducer,
        data: dataReducer,
    },
});

export default store;