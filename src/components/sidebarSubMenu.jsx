import { connect } from "react-redux"
import { bindActionCreators } from "@reduxjs/toolkit"
import { newPlaylist } from "../store/spotifySlice"

import styled from "styled-components"
import MenuItem from "./menuItem"

const SidebarSubMenu = ({ newPlaylist, playlists }) => {
  return (
    <Container>
      <MenuItem
        path={`/playlist/${playlists.length + 1}`}
        action={() => newPlaylist()}
        label="Create Playlist"
        icon="create-playlist"
        bg="var(--white)"
        padding />
      <MenuItem path="/liked-songs" label="Liked Songs" icon="heart-bg" padding />
    </Container>
  )
}

const mapStateToProps = state => ({ playlists: state.spotify.playlists })
const mapDispatchToProps = dispatch => bindActionCreators({ newPlaylist }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(SidebarSubMenu)

const Container = styled.ul`
  margin-top: 2.4rem;
`