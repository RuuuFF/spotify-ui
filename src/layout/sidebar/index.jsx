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

const Sidebar = props => (
  <SidebarContainer>
    <MainNav>
      <Banner />
      <Menu />
      <SubMenu />

      <HorizontalRule />
      <Shadow />

      <UserPlaylists />
      <SidebarFooter />
    </MainNav>
  </SidebarContainer>
)

export default Sidebar