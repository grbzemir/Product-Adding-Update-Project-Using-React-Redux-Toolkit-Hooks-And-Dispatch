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

        sortingDataFunction: (state, action) => {
            state.data = [...state.data.sort((a, b) => action.payload == "asc" ? a.price - b.price : action.payload == "desc" ? b.price - a.price : null)];
        },

        searchDataFunction: (state, action) => {
            state.keyword = action.payload;
        },

        deleteDataFunction: (state, action) => {
            state.data = [...state.data.filter(dt => dt.id !== action.payload)];
        },
        updateDataFunction: (state, action) => {
            state.data = state.data.map(dt =>
                dt.id === action.payload.id ? { ...dt, ...action.payload } : dt
            );
        },

    },
});



export const { createDataFunction, deleteDataFunction, updateDataFunction, sortingDataFunction, searchDataFunction } = dataSlice.actions;
export default dataSlice.reducer;