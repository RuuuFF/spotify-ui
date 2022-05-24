import styled from "styled-components"
import Icon from "./icons"

const Banner = props => (
  <Container>
    <a href="/" onClick={event => event.preventDefault()}>
      <Icon icon="logo" />
    </a>
  </Container>
)

export default Banner

const Container = styled.div`
  margin-bottom: 2.3rem;

  a {
    display: block;
    padding: 0 2.4rem;

    svg {
      width: 100%;
      height: 40px;
      max-width: 13.1rem;
      margin: 0;
    }
  }
`