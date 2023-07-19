import { configureStore } from "@reduxjs/toolkit";
import AppSlice from "./AppSlice";
import CacheSlice from "./CacheSlice";
import LiveChatSlice from "./LiveChatSlice";

const store = configureStore({
  reducer :  {
    app : AppSlice,
    cache : CacheSlice,
    live : LiveChatSlice
    
  }
})

export default store