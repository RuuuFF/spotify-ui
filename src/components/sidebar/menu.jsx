import { connect } from "react-redux"
import { bindActionCreators } from "@reduxjs/toolkit"
import { newPlaylist } from "../../store/spotifySlice"

import styled from "styled-components"
import MenuItem from "./menuItem"

const Menu = ({ newPlaylist, newPlaylistPath }) => (
  <Container>
    <div className="padding">
      <MenuItem path="/" label="Home" icon="home" />
      <MenuItem path="/search" label="Search" icon="search" />
      <MenuItem path="/library" label="Your Library" icon="library" />
    </div>
    <div className="separator"></div>
    <div>
      <MenuItem
        path={`/playlist/${newPlaylistPath}`}
        action={() => newPlaylist()}
        label="Create Playlist"
        icon="plus"
        bg="var(--white)"
        padding />
      <MenuItem
        path="/liked-songs"
        label="Liked Songs"
        icon="heart-bg"
        padding />
    </div>
  </Container>
)

const mapStateToProps = state => ({ newPlaylistPath: state.spotify.playlists.length + 1 })
const mapDispatchToProps = dispatch => bindActionCreators({ newPlaylist }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(Menu)

export const Container = styled.ul`
  display: flex;
  flex-direction: column;

  .padding {
    padding: 0 0.8rem;
  }

  .separator {
    margin-top: 2.4rem;
  }
`