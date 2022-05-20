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