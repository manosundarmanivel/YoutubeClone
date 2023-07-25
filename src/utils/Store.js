import { configureStore } from "@reduxjs/toolkit";
import AppSlice from "./AppSlice";
import CacheSlice from "./CacheSlice";
import LiveChatSlice from "./LiveChatSlice";
import QuerySlice from "./QuerySlice";

const store = configureStore({
  reducer :  {
    app : AppSlice,
    cache : CacheSlice,
    live : LiveChatSlice,
    query: QuerySlice,
    
  }
})

export default store