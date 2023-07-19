import { createSlice } from "@reduxjs/toolkit";

const LiveChatSlice = createSlice({
    name:"live",
    initialState:{
        comments : []
    },
    reducers:{
        setComments : (state,action) =>
        {
            state.comments.push(action.payload);
        }
    }
})

export const {setComments} = LiveChatSlice.actions;
export default LiveChatSlice.reducer;