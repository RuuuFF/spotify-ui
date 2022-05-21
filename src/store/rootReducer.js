import { configureStore } from "@reduxjs/toolkit"

import spotifyReducer from "./reducers/spotifyReducer"

export const store = configureStore({
  reducer: {
    spotify: spotifyReducer
  }
})