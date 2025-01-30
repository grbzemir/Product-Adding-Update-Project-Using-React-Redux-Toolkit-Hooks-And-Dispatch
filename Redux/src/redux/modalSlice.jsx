import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    modal: false,
};

//Başlangıç durumunu false olarak ayarladık ürün eklemeye çalıştığımda false true olucak

export const modalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        modalFunc: (state) => {
            state.modal = !state.modal;
        },
    },
});


export const { modalFunc } = modalSlice.actions;
export default modalSlice.reducer;