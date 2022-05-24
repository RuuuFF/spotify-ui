import { createSlice } from "@reduxjs/toolkit"

const INITIAL_STATE = {
  tabs: { activeTab: 'Home' },
  expandAlbum: false,
  isPlaying: false,
  volume: 0,
  maxVolume: 100,
  time: 0,
  playlists: [],
  currentMusic: {
    artist: "WALK THE MOON",
    name: "Shut Up and Dance",
    durationInSeconds: 238,
    albumImage: "./images/image1.jpg",
  },
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
      state.expandAlbum = !state.expandAlbum
    },

    togglePlayer: state => {
      if (state.isPlaying === false && state.time >= state.currentMusic.durationInSeconds) {
        state.time = 0
      }
      state.isPlaying = !state.isPlaying
    },

    updateTime: (state, action) => {
      state.time = action.payload
    },

    updateVolume: (state, action) => {
      state.volume = action.payload
    },

    prevMusic: state => {
      state.time = 0
      state.isPlaying = true
    }
  }
})

export const {
  selectTab,
  newPlaylist,
  toggleAlbum,
  togglePlayer,
  updateTime,
  updateVolume,
  prevMusic
} = spotifySlice.actions

export default spotifySlice.reducer