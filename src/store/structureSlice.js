import { createSlice } from "@reduxjs/toolkit"

const INITIAL_STATE = {
  expandAlbum: false,
  userDropdown: false,
  mainBackground: "#248524",
  header: {
    left: null,
    opacity: 0,
    background: "#172e17",
  }
}

export const structureSlice = createSlice({
  name: 'structure',
  initialState: INITIAL_STATE,

  reducers: {
    updateHeaderLeft: (state, action) => {
      state.header.left = action.payload
    },

    toggleExpandAlbum: state => {
      state.expandAlbum = !state.expandAlbum
    },

    toggleUserDropdown: state => {
      state.userDropdown = !state.userDropdown
    },

    scaleHeaderBgOpacity: (state, action) => {
      const { headerBottom, mainSectionTop } = action.payload
      const range = mainSectionTop - headerBottom

      function scale(num, in_min, in_max, out_min, out_max) {
        const percentage = (num - in_min) / (in_max - in_min)
        let value = percentage * (out_max - out_min) + out_min

        value = value < out_min ? out_min : value
        value = value > out_max ? out_max : value

        return value
      }

      state.header.opacity = scale(headerBottom, range, mainSectionTop, 0, 1)
    },

    getRandomBackground: state => {
      const colors = ["green", "blue", "yellow", "orange", "white"]
      let random = Math.floor(Math.random() * colors.length)

      while (state.mainBackground === colors[random]) {
        random = Math.floor(Math.random() * colors.length)
      }

      state.mainBackground = colors[random]
    },

    setDefaultBackground: state => {
      state.mainBackground = "#248524"
    }
  }
})

export const {
  updateHeaderLeft,
  toggleExpandAlbum,
  toggleUserDropdown,
  scaleHeaderBgOpacity,
  getRandomBackground,
  setDefaultBackground
} = structureSlice.actions

export default structureSlice.reducer