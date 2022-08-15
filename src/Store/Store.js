import { configureStore } from "@reduxjs/toolkit";
import { navigationSlice } from "./navigationSlice";
import { quranalkarimSlice } from "./QuranalkarimSlice";

const store = configureStore({
    reducer : {
        quranalkarim: quranalkarimSlice.reducer,
        navigation: navigationSlice.reducer,
    },
});

export default store ;
