import { useRef } from "react"
import { useEffect } from "react"
import { useState } from "react"
import { connect } from "react-redux"
import { newPlaylist } from "../../store/reducers/spotifyReducer"

import Banner from "../../components/banner"
import MenuItem from "../../components/menuItem"
import PlaylistItem from "../../components/playlistItem"

import {
  SidebarContainer,
  MainNav,
  Menu,
  SubMenu,
  HorizontalRule,
  Shadow,
  UserPlaylists,
  SidebarFooter
} from "./styles"

const Sidebar = props => {
  const { playlists = [], dispatch } = props
  const [height, setHeight] = useState(null)
  const element = useRef(null)

  const createNewPlaylist = event => {
    event.preventDefault()
    dispatch(newPlaylist())
  }

  useEffect(() => setHeight(element.current.getBoundingClientRect().height), [])

  return (
    <SidebarContainer>
      <MainNav>
        <Banner />

        <Menu>
          <MenuItem path="/" label="Home" />
          <MenuItem path="/search" label="Search" />
          <MenuItem path="/library" label="Your Library" />
        </Menu>

        <SubMenu>
          <MenuItem path="/create-playlist" label="Create Playlist" bg="var(--white)"
            action={createNewPlaylist} padding />
          <MenuItem path="/liked-songs" label="Liked Songs" padding />
        </SubMenu>

        <HorizontalRule />

        <Shadow />

        <UserPlaylists ref={element} height={height}>
          {playlists.map((name, index) => <PlaylistItem key={index} label={name} />)}
        </UserPlaylists>

        <SidebarFooter>
          <MenuItem path="/install" label="Install App" margin />
        </SidebarFooter>
      </MainNav>
    </SidebarContainer>
  )
}


export default connect(state => ({
  playlists: state.spotify.playlists
}))(Sidebar)