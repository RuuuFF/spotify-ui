import { connect } from "react-redux"
import { bindActionCreators } from "@reduxjs/toolkit"
import { newPlaylist } from "../store/spotifySlice"

import styled from "styled-components"
import MenuItem from "./menuItem"

const SidebarSubMenu = ({ newPlaylist }) => {
  const createNewPlaylist = event => {
    event.preventDefault()
    newPlaylist()
  }

  return (
    <Container>
      <MenuItem path="/create-playlist" label="Create Playlist" bg="var(--white)"
        action={createNewPlaylist} icon="create-playlist" padding />
      <MenuItem path="/liked-songs" label="Liked Songs" icon="heart-bg" padding />
    </Container>
  )
}

const mapDispatchToProps = dispatch => bindActionCreators({ newPlaylist }, dispatch)
export default connect(null, mapDispatchToProps)(SidebarSubMenu)

const Container = styled.ul`
  margin-top: 2.4rem;
`