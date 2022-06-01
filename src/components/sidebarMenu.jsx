import styled from "styled-components"
import MenuItem from "./menuItem"

const SidebarMenu = props => (
  <Container>
    <MenuItem path="/" label="Home" icon="home" />
    <MenuItem path="/search" label="Search" icon="search" />
    <MenuItem path="/library" label="Your Library" icon="library" />
  </Container>
)

export default SidebarMenu

export const Container = styled.ul`
  display: flex;
  flex-direction: column;
  padding: 0 0.8rem;
`