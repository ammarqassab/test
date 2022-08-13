import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./AuthSlice";
import { navigationSlice } from "./navigationSlice";

const store = configureStore({
    reducer : {
        // auth: authSlice.reducer,
        navigation: navigationSlice.reducer,
    },
});

export default store ;
