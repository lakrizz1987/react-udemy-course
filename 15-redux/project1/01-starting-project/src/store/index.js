import { createStore } from 'redux';
import { configureStore, createSlice } from '@reduxjs/toolkit';

const initialCounterState = { value: 0, showCounter: true }

const counterSlice = createSlice({
    name: 'counter',
    initialState: initialCounterState,
    reducers: {
        increment(state) {
            state.value++;
        },
        decrement(state) {
            state.value--;
        },
        increase(state, action) {
            state.value = state.value + action.payload
        },
        toggleCounter(state) {
            state.showCounter = !state.showCounter
        }
    }
})

/*
const counterReducer = (state = { counter: 0, showCounter: true }, action) => {
    if (action.type === 'increment') {
        return {
            counter: state.counter + 1,
            showCounter: state.showCounter
        }
    }

    if (action.type === 'increase') {
        return {
            counter: state.counter + action.payload,
            showCounter: state.showCounter
        }
    }

    if (action.type === 'decrement') {
        return {
            counter: state.counter - 1,
            showCounter: state.showCounter
        }
    }

    if (action.type === 'toggle') {
        return {
            counter: state.counter,
            showCounter: !state.showCounter
        }
    }

    return state;

}
const store = createStore(counterReducer)
*/

const initialAuthState = { isAuth: false }

const authSlice = createSlice({
    name: 'authentication',
    initialState: initialAuthState,
    reducers: {
        login(state) {
            state.isAuth = true
        },
        logout(state) {
            state.isAuth = false
        }
    }
})

const store = configureStore({
    reducer: { counter: counterSlice.reducer , auth: authSlice.reducer}
})

export const counterSliceActions = counterSlice.actions;
export const authActions = authSlice.actions;

export default store;