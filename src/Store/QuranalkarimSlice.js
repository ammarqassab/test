import { createSlice } from "@reduxjs/toolkit";

export const quranalkarimSlice = createSlice({
    name:"quranalkarim",
    initialState:{pages: null},
    reducers:{
        addaQuranalkarimSlice: (state, action) => {
            state.pages = action.payload;
        }
    }
});

export const {addaQuranalkarimSlice} = quranalkarimSlice.actions;

export default quranalkarimSlice.reducer;
