import { createSlice } from "@reduxjs/toolkit"

const INITIAL_STATE = {
  active: {
    home: true
  },
  playlists: []
}

export const tabSlice = createSlice({
  name: 'tab',
  initialState: INITIAL_STATE,
  reducers: {
    selectTab: (state, action) => {
      state.active = { [action.payload]: true }
    },
    newPlaylist: (state) => {
      state.playlists = [...state.playlists, state.playlists.length + 1]
    }
  }
})

export const { selectTab, newPlaylist } = tabSlice.actions

export default tabSlice.reducer