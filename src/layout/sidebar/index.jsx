import {
  SidebarContainer,
  MainNav,
  Banner,
  MenuList
} from "./styles"

import MenuItem from "../../components/menuItem"

import {
  SpotifyLogo,
  HomeIcon,
  SearchIcon,
  LibraryIcon
} from "../../components/icons"

const Sidebar = props => (
  <SidebarContainer>
    <MainNav>
      <Banner>
        <SpotifyLogo />
      </Banner>

      <MenuList>
        <MenuItem
          path="/"
          icon={<HomeIcon />}
          label="Home"
          active />
        <MenuItem
          path="javascript:;"
          icon={<SearchIcon />}
          label="Search" />
        <MenuItem
          path="javascript:;"
          icon={<LibraryIcon />}
          label="Your Library" />
      </MenuList>
    </MainNav>
  </SidebarContainer>
)

export default Sidebar