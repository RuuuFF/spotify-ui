import styled from "styled-components"
import Icon from "./icons"

import { Link } from "react-router-dom"

const Banner = props => (
  <Container>
    <Link to="/">
      <Icon icon="logo" />
    </Link>
  </Container>
)

export default Banner

const Container = styled.div`
  margin-bottom: 2.3rem;

  a {
    display: block;
    padding: 0 2.4rem;
    color: var(--white);

    svg {
      width: 100%;
      height: 40px;
      max-width: 13.1rem;
      margin: 0;
    }
  }
`