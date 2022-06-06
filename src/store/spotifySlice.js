import { createSlice } from "@reduxjs/toolkit"

const INITIAL_STATE = {
  playlists: [],
  tabs: {
    activeTab: 'Home'
  }
}

export const spotifySlice = createSlice({
  name: 'spotify',
  initialState: INITIAL_STATE,

  reducers: {
    selectTab: (state, action) => {
      state.tabs.activeTab = action.payload
    },

    newPlaylist: state => {
      const playlist = {
        id: state.playlists.length + 1,
        name: `My Playlist #${state.playlists.length + 1}`
      }

      state.tabs.activeTab = playlist.name
      state.playlists = [playlist, ...state.playlists]
    }
  }
})

export const {
  selectTab,
  newPlaylist
} = spotifySlice.actions

export default spotifySlice.reducer