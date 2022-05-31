import { connect } from "react-redux"
import { bindActionCreators } from "@reduxjs/toolkit"
import { updateHeaderLeft } from "../../store/structureSlice"

import Banner from "../../components/banner"
import SidebarMenu from "../../components/sidebarMenu"
import SidebarSubMenu from "../../components/sidebarSubMenu"
import UserPlaylists from "../../components/userPlaylists"
import SidebarFooter from "../../components/sidebarFooter"

import {
  SidebarContainer,
  MainNav,
  HorizontalRule,
  Shadow,
} from "./styles"
import { useRef } from "react"
import { useEffect } from "react"

const Sidebar = props => {
  const element = useRef(null)

  useEffect(() => {
    const right = element.current.getBoundingClientRect().right
    props.updateHeaderLeft(right)
  }, [props])
  return (
    <SidebarContainer ref={element}>
      <MainNav>
        <Banner />
        <SidebarMenu />
        <SidebarSubMenu />

        <HorizontalRule />
        <Shadow />

        <UserPlaylists />
        <SidebarFooter />
      </MainNav>
    </SidebarContainer>
  )
}

const mapDispatchToProps = dispatch => bindActionCreators({ updateHeaderLeft }, dispatch)
export default connect(null, mapDispatchToProps)(Sidebar)