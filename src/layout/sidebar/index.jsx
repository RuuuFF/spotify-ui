import { useRef } from "react"
import { useEffect } from "react"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { newPlaylist, selectTab } from "../../store/reducers/tabReducer"

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
  const playlists = useSelector(state => state.tab.playlists || [])
  const dispatch = useDispatch()
  const element = useRef(null)
  const [height, setHeight] = useState(null)

  const createNewPlaylist = event => {
    event.preventDefault()
    dispatch(newPlaylist())
    dispatch(selectTab(`My Playlist #${playlists.length + 1}`.toLowerCase()))
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
          <MenuItem
            path="/create-playlist"
            label="Create Playlist"
            bg="var(--white)"
            padding
            action={createNewPlaylist} />
          <MenuItem
            path="/liked-songs"
            label="Liked Songs"
            padding />
        </SubMenu>

        <HorizontalRule />
        <Shadow />

        <UserPlaylists ref={element} height={height}>
          {playlists.map((value, index, array) => <PlaylistItem key={index} label={`My Playlist #${array.length - index}`} />)}
        </UserPlaylists>

        <SidebarFooter>
          <MenuItem
            path="/"
            label="Install App"
            margin />
        </SidebarFooter>
      </MainNav>
    </SidebarContainer>
  )
}

export default Sidebar