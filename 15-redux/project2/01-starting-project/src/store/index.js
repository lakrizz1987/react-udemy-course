import {configureStore} from '@reduxjs/toolkit'
import uiSlice from './uii-slice'


const store = configureStore({
    reducer:{ui:uiSlice.reducer}
});

export default store;