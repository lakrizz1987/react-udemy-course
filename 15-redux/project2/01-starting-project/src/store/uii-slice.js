import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
    name: 'ui',
    initialState: { cartIsVisible: false, notification: null },
    reducers: {
        toggleCart(state) {
            state.cartIsVisible = !state.cartIsVisible;
        },
        setNotification(state,action){
            state.notification = {status: action.payload.status,
            tittle: action.payload.title,
            message: action.payload.message
            }
        }
    }
});

export const uiActions = uiSlice.actions;

export default uiSlice;