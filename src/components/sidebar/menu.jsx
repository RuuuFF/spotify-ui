import { connect } from "react-redux"
import { bindActionCreators } from "@reduxjs/toolkit"
import { newPlaylist } from "../../store/spotifySlice"

import styled from "styled-components"
import MenuItem from "./menuItem"

const Menu = ({ newPlaylist }) => (
  <Container>
    <div className="padding">
      <MenuItem path="/" label="Home" icon="home" />
      <MenuItem path="/search" label="Search" icon="search" />
      <MenuItem path="/library" label="Your Library" icon="library" />
    </div>
    <div className="separator"></div>
    <div>
      <MenuItem
        button
        padding
        icon="plus"
        bg="var(--white)"
        label="Create Playlist"
        action={() => newPlaylist()} />
      <MenuItem
        padding
        icon="heart-bg"
        path="/liked-songs"
        label="Liked Songs" />
    </div>
  </Container>
)

const mapDispatchToProps = dispatch => bindActionCreators({ newPlaylist }, dispatch)
export default connect(null, mapDispatchToProps)(Menu)

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