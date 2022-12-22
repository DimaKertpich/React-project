import { configureStore } from "@reduxjs/toolkit";
import authUserSlice from "./authUserSlice";

export default configureStore({
    reducer:{
        auth: authUserSlice
    }
})