import { connect } from "react-redux"

import Banner from "../../components/banner"
import Menu from "../../components/menu"
import SubMenu from "../../components/subMenu"
import UserPlaylists from "../../components/userPlaylists"
import SidebarFooter from "../../components/sidebarFooter"

import {
  SidebarContainer,
  MainNav,
  HorizontalRule,
  Shadow,
} from "./styles"

const Sidebar = ({ playlists = [], dispatch }) => (
  <SidebarContainer>
    <MainNav>
      <Banner />
      <Menu />
      <SubMenu dispatch={dispatch} />

      <HorizontalRule />
      <Shadow />

      <UserPlaylists playlists={playlists} />
      <SidebarFooter />
    </MainNav>
  </SidebarContainer>
)

export default connect(state => ({ playlists: state.spotify.playlists }))(Sidebar)