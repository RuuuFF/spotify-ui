import { configureStore } from "@reduxjs/toolkit"

import tabReducer from "./reducers/tabReducer"

export const store = configureStore({
  reducer: {
    tab: tabReducer
  }
})