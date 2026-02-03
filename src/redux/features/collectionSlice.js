import { createSlice } from "@reduxjs/toolkit";
import {toast,Bounce } from 'react-toastify';

const initialState = {
    items: JSON.parse(localStorage.getItem('collection')) || []
}

const collectionSlice = createSlice({
    name: 'collection',
    initialState,
    reducers: {
        addCollection: (state, action) => {
            const alreadyExists = state.items.find(
                item => item.id == action.payload.id
            )
            if (!alreadyExists) {
                state.items.push(action.payload)
                localStorage.setItem('collection', JSON.stringify(state.items))
                // alert(action.payload.title + "Item added to collection!")
                toast(`${action.payload.title.charAt(0).toUpperCase() + action.payload.title.slice(1)} added to collection!`);
            } else { toast(`${action.payload.title.charAt(0).toUpperCase() + action.payload.title.slice(1)} already in collection!`); }
        },
        removeCollection: (state, action) => {
            state.items = state.items.filter(
                item => item.id !== action.payload.id
            )
            localStorage.setItem('collection', JSON.stringify(state.items))
            toast(`${action.payload.title.charAt(0).toUpperCase() + action.payload.title.slice(1)} removed from collection!`);
        },
        clearCollection: (state, action) => {
            state.items = []
            localStorage.setItem('collection', JSON.stringify(state.items))
            toast(`Collection cleared!`);
        }
    }
})

export const { addCollection, removeCollection, clearCollection, collectionCount } = collectionSlice.actions
export default collectionSlice.reducer