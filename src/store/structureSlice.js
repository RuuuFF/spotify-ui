import { createSlice } from "@reduxjs/toolkit"

const INITIAL_STATE = {
  expandAlbum: false,
  userDropdown: false,
  header: {
    left: null,
    showBg: false,
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

    toggleHeaderBg: (state, action) => {
      const { headerBottom, mainSectionTop } = action.payload
      state.header.showBg = mainSectionTop < headerBottom
    }
  }
})

export const {
  updateHeaderLeft,
  toggleExpandAlbum,
  toggleUserDropdown,
  toggleHeaderBg
} = structureSlice.actions

export default structureSlice.reducer