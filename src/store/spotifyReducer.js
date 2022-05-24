import { createSlice } from "@reduxjs/toolkit"

const INITIAL_STATE = {
  playlists: [],
  tabs: {
    activeTab: 'Home'
  },
  player: {
    time: 0,
    isPlaying: false,
    expandAlbum: false,
    volume: {
      currentVolume: 0,
      maxVolume: 100,
      lastVolumeOnMute: 0,
    },
    currentMusic: {
      artist: "WALK THE MOON",
      name: "Shut Up and Dance",
      durationInSeconds: 238,
      liked: false,
      albumImage: "./images/image1.jpg",
    },
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
      const name = `My Playlist #${state.playlists.length + 1}`
      state.playlists = [name, ...state.playlists]
      state.tabs.activeTab = name
    },

    toggleAlbum: state => {
      state.player.expandAlbum = !state.player.expandAlbum
    },

    togglePlaying: state => {
      if (state.player.isPlaying === false && state.player.time >= state.player.currentMusic.durationInSeconds) {
        state.player.time = 0
      }
      state.player.isPlaying = !state.player.isPlaying
    },

    toggleLiked: state => {
      state.player.currentMusic.liked = !state.player.currentMusic.liked
    },

    updateTime: (state, action) => {
      state.player.time = action.payload

      if (state.player.time >= state.player.currentMusic.durationInSeconds) {
        state.player.isPlaying = false
      }
    },

    updateVolume: (state, action) => {
      state.player.volume.currentVolume = action.payload
    },

    toggleMute: state => {
      const { currentVolume, lastVolumeOnMute } = state.player.volume

      if (currentVolume > 0) {
        state.player.volume.lastVolumeOnMute = currentVolume
        state.player.volume.currentVolume = 0
      } else if (currentVolume === 0 && lastVolumeOnMute === 0) {
        state.player.volume.currentVolume = 70
      } else {
        state.player.volume.currentVolume = lastVolumeOnMute
      }
    },

    prevMusic: state => {
      state.player.time = 0
      state.player.isPlaying = true
    }
  }
})

export const {
  selectTab,
  newPlaylist,
  toggleAlbum,
  togglePlaying,
  toggleLiked,
  updateTime,
  updateVolume,
  toggleMute,
  prevMusic,
} = spotifySlice.actions

export default spotifySlice.reducer