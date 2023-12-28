import { configureStore } from "@reduxjs/toolkit";
import countReducer from './InDe';
const store =configureStore({
    reducer:{
        count:countReducer,

    },
});
export default store;