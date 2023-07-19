import { configureStore } from "@reduxjs/toolkit";
import AppSlice from "./AppSlice";
import CacheSlice from "./CacheSlice";

const store = configureStore({
  reducer :  {
    app : AppSlice,
    cache : CacheSlice
    
  }
})

export default store