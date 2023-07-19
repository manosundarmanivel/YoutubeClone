import { createSlice } from "@reduxjs/toolkit";

const catchSlice = createSlice({
    name : "cache",
    initialState : {

    },
    reducers:{
        addCache : (state,action)=>{
            state = Object.assign(state , action.payload)
        }
    }
})
export const {addCache} = catchSlice.actions;
export default catchSlice.reducer;