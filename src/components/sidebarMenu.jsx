import styled from "styled-components"
import MenuItem from "./menuItem"

const SidebarMenu = props => (
  <Container>
    <MenuItem path="/" label="Home" />
    <MenuItem path="/search" label="Search" />
    <MenuItem path="/library" label="Your Library" />
  </Container>
)

export default SidebarMenu

export const Container = styled.ul`
  display: flex;
  flex-direction: column;
  padding: 0 0.8rem;
`