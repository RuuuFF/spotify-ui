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
        name: `My Playlist #${state.playlists.length + 1}`,
        imageUrl: "",
        description: "",
      }

      state.tabs.activeTab = playlist.name
      state.playlists.unshift(playlist)
    },

    updatePlaylistItem: (state, action) => {
      const { newPlaylist, index } = action.payload
      const prevPlaylist = state.playlists[index]

      if (newPlaylist.name !== "") {
        state.tabs.activeTab = newPlaylist.name
        state.playlists[index] = { ...prevPlaylist, ...newPlaylist }
      }
    }
  }
})

export const {
  selectTab,
  newPlaylist,
  updatePlaylistItem
} = spotifySlice.actions

export default spotifySlice.reducer