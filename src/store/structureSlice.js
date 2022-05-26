import { createSlice } from "@reduxjs/toolkit"

const INITIAL_STATE = {
  mainHeaderLeft: null,
  expandAlbum: false,
}

export const structureSlice = createSlice({
  name: 'structure',
  initialState: INITIAL_STATE,

  reducers: {
    updateHeaderLeft: (state, action) => {
      state.mainHeaderLeft = action.payload
    },

    toggleExpandAlbum: state => {
      state.expandAlbum = !state.expandAlbum
    },
  }
})

export const {
  updateHeaderLeft,
  toggleExpandAlbum
} = structureSlice.actions

export default structureSlice.reducer