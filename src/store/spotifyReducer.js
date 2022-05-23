import { createSlice } from "@reduxjs/toolkit"

const INITIAL_STATE = {
  tabs: { activeTab: 'Home' },
  expandedAlbum: false,
  playlists: []
}

export const spotifySlice = createSlice({
  name: 'spotify',
  initialState: INITIAL_STATE,
  reducers: {
    selectTab: (state, action) => {
      state.tabs.activeTab = action.payload
    },
    newPlaylist: state => {
      const name = `My Playlist #${state.playlists.length + 1}`
      state.playlists = [name, ...state.playlists]
      state.tabs.activeTab = name
    },
    toggleAlbum: state => {
      state.expandedAlbum = !state.expandedAlbum
    }
  }
})

export const { selectTab, newPlaylist, toggleAlbum } = spotifySlice.actions
export default spotifySlice.reducer