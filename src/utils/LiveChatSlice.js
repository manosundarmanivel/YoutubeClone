import { createSlice } from "@reduxjs/toolkit";

const LiveChatSlice = createSlice({
    name:"live",
    initialState:{
        comments : []
    },
    reducers:{
        setComments : (state,action) =>
        {
            state.comments.splice(10,1)
            state.comments.unshift(action.payload);
        }
    }
})

export const {setComments} = LiveChatSlice.actions;
export default LiveChatSlice.reducer;