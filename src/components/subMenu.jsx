import styled from "styled-components"
import MenuItem from "./menuItem"

import { newPlaylist } from "../store/spotifyReducer"

const SubMenu = ({ dispatch }) => {
  const createNewPlaylist = event => {
    event.preventDefault()
    dispatch(newPlaylist())
  }

  return (
    <Container>
      <MenuItem path="/create-playlist" label="Create Playlist" bg="var(--white)"
        action={createNewPlaylist} padding />
      <MenuItem path="/liked-songs" label="Liked Songs" padding />
    </Container>
  )
}

export default SubMenu

const Container = styled.ul`
  margin-top: 2.4rem;
`