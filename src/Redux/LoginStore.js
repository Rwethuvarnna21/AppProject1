import { configureStore } from "@reduxjs/toolkit";

import Loginreducer from './LoginSlice'
const LoginStore=configureStore({
    reducer:{
        login:Loginreducer,
    }
})
export default LoginStore;