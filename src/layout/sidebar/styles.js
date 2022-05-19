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

export const Banner = styled.div`
  margin-bottom: 1.8rem;

  a {
    display: block;
    padding: 0 2.4rem 0.633rem;

    svg {
      width: 100%;
      max-width: 13.1rem;
      margin: 0;
    }
  }
`

export const MenuList = styled.ul`
  display: flex;
  flex-direction: column;
  padding: 0 0.8rem;
`