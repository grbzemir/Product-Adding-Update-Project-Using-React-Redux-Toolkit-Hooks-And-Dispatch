import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    data: [],
};


export const dataSlice = createSlice({
    name: 'data',
    initialState,
    reducers: {
        createDataFunction: (state, action) => {
            state.data = [...state.data, action.payload];
        },
    },
});



export const { createDataFunction } = dataSlice.actions;
export default dataSlice.reducer;