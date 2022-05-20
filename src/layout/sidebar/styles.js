import styled from "styled-components"

export const SidebarContainer = styled.aside`
  width: 24.1rem;
  height: 100%;
  grid-column: 1;
  grid-row: 1;
`

export const MainNav = styled.nav`
  background-color: var(--sidebar-nav-bg);
  padding-top: 2.4rem;
  height: 100%;
  display: flex;
  flex-direction: column;
`

export const Menu = styled.ul`
  display: flex;
  flex-direction: column;
  padding: 0 0.8rem;
`

export const SubMenu = styled.ul`
  margin-top: 2.4rem;
`

export const HorizontalRule = styled.hr`
  position: relative;
  margin: 0.8rem 2.4rem 0;
  height: 1px;
  border: none;
  background-color: #282828;
  z-index: 11;
`

export const Shadow = styled.div`
  position: relative;
  box-shadow: -40px 0px 10px 10px rgb(0 0 0 / 60%);
  z-index: 10;
`

export const UserPlaylists = styled.ul`
  padding: 0.8rem 0;
  flex: 1;
  height: 100%;
  max-height: ${props => props.height ? `${props.height}px` : "100%"};
  overflow: auto;

  ::-webkit-scrollbar {
    width: 12px;
  }
  
  ::-webkit-scrollbar-thumb {
    background: rgba(255, 255, 255, 0.3);
  }
  
  ::-webkit-scrollbar-thumb:hover {
    background: rgba(255, 255, 255, 0.5);
  }
`

export const SidebarFooter = styled.ul`
  padding: 0 0.8px;
`