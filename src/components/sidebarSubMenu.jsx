import { useDispatch } from "react-redux"
import { newPlaylist } from "../store/spotifySlice"

import styled from "styled-components"
import MenuItem from "./menuItem"

const SidebarSubMenu = props => {
  const dispatch = useDispatch()
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

export default SidebarSubMenu

const Container = styled.ul`
  margin-top: 2.4rem;
`