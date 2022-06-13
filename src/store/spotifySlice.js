import { createSlice } from "@reduxjs/toolkit"

const INITIAL_STATE = {
  playlists: JSON.parse(localStorage.getItem("playlists")) || [],
  tabs: {
    activeTab: 'Home',
    tabId: null,
  }
}

function getUniqueId(idList, length = 6) {
  function getRandomId() {
    let randomId = ""
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"

    for (let index = 1; index <= length; index++) {
      randomId += characters[Math.floor(Math.random() * characters.length)]
    }

    return randomId
  }

  let uniqueId = getRandomId()
  while (idList.includes(uniqueId)) { uniqueId = getRandomId() }
  return uniqueId
}

export const spotifySlice = createSlice({
  name: "spotify",
  initialState: INITIAL_STATE,

  reducers: {
    selectTab: (state, action) => {
      state.tabs.activeTab = action.payload
    },

    setTabId: (state, action) => {
      state.tabs.tabId = action.payload
    },

    newPlaylist: state => {
      const idList = state.playlists.map(playlist => playlist.id)
      const id = getUniqueId(idList)

      const playlist = {
        id,
        imageUrl: "",
        description: "",
        name: `My Playlist #${state.playlists.length + 1}`,
      }

      state.playlists.push(playlist)
      window.location.hash = `#/playlist/${id}`
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
      window.location.hash = "#/"
      state.tabs.activeTab = "Home"
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