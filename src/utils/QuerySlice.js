import { createSlice } from "@reduxjs/toolkit";

const QuerySlice = createSlice({
    name : "query",
    initialState: {
        queryValue : ""
    },
    reducers:{
        setQueryValue : (state,action)=>{
            state.queryValue = action.payload;
        }
    }
})

export const {setQueryValue} = QuerySlice.actions;
export default QuerySlice.reducer;







// const catchSlice = createSlice({
//     name : "cache",
//     initialState : {

//     },
//     reducers:{
//         addCache : (state,action)=>{
//             state = Object.assign(state , action.payload)
//         }
//     }
// })
// export const {addCache} = catchSlice.actions;
// export default catchSlice.reducer;