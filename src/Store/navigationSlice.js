import { createSlice } from "@reduxjs/toolkit";

export const navigationSlice = createSlice({
    name:"navigation",
    initialState:{sections: null, tutorial: null, pages: null},
    reducers:{
        addSections: (state, action) => {
            state.sections = action.payload;
        },
        addTutorial: (state, action) => {
            state.tutorial = action.payload;
        },
        addPages: (state, action) => {
            state.pages = action.payload;
        },
        // addPages: (state, action) => {
        //     state.pages = action.payload.sort(function(a, b){return a.number-b.number});
        // },
        // updataNavigation: (state, action) => {
        //     state.data.push(action.payload);
        // },
        // deleteNavigation: (state, action) => {
        //     state.data.splice(action.payload, 1);
        // },
        // editNavigation: (state, action) => {
        //     state.data.splice(action.payload[0] - 1, 1, action.payload[1]);
        // }
    }
});

export const {addSections, addTutorial, addPages} = navigationSlice.actions;

export default navigationSlice.reducer;
