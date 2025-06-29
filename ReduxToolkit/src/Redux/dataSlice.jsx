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

        deleteDataFunction: (state, action) => {
            state.data = [...state.data.filter(dt => dt.id !== action.payload)];
        }
    },
});



export const { createDataFunction, deleteDataFunction } = dataSlice.actions;
export default dataSlice.reducer;