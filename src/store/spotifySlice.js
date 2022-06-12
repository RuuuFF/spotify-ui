import { createSlice } from "@reduxjs/toolkit"

const INITIAL_STATE = {
  playlists: JSON.parse(localStorage.getItem("playlists")) || [],
  tabs: {
    activeTab: 'Home',
    tabId: null,
  }
}

export const spotifySlice = createSlice({
  name: 'spotify',
  initialState: INITIAL_STATE,

  reducers: {
    selectTab: (state, action) => {
      state.tabs.activeTab = action.payload
    },

    setTabId: (state, action) => {
      state.tabs.tabId = action.payload
    },

    newPlaylist: state => {
      const playlist = {
        id: state.playlists.length + 1,
        name: `My Playlist #${state.playlists.length + 1}`,
        imageUrl: "",
        description: "",
      }

      state.playlists.push(playlist)
      localStorage.setItem("playlists", JSON.stringify(state.playlists))
    },

    updatePlaylist: (state, action) => {
      const { newPlaylist, index } = action.payload
      const prevPlaylist = state.playlists[index]

      if (newPlaylist.name !== "") {
        state.playlists[index] = { ...prevPlaylist, ...newPlaylist }
        localStorage.setItem("playlists", JSON.stringify(state.playlists))
      }
    },

    deletePlaylist: (state, action) => {
      state.playlists.splice(action.payload, 1)
      localStorage.setItem("playlists", JSON.stringify(state.playlists))
    }
  }
})

export const {
  selectTab,
  setTabId,
  newPlaylist,
  updatePlaylist,
  deletePlaylist
} = spotifySlice.actions

export default spotifySlice.reducer