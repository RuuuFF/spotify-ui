import styled from "styled-components"
import { connect } from "react-redux";
// import { expandAlbum } from "../store/spotifyReducer"

import MenuItem from "./menuItem";
import { useEffect, useRef, useState } from "react";

const SidebarFooter = ({ albumExpanded, dispatch }) => {
  const image = useRef(null)
  const [height, setHeight] = useState(null)

  function teste() {
    return albumExpanded ? { transform: `translateY(-${height - 1}px)`, zIndex: 20 } : {}
  }

  useEffect(() => setHeight(image.current.getBoundingClientRect().height), [])

  return (
    <div style={teste()}>
      <Container>
        <MenuItem path="/install" label="Install App" margin />
        <div ref={image}>
          <img src="./images/image1.jpg" alt="Walk The Moon" />
        </div>
      </Container>
    </div>
  )
}

export default connect(state => ({
  albumExpanded: state.spotify.albumExpanded
}))(SidebarFooter)

const Container = styled.ul`
  background-color: var(--sidebar-nav-bg);
  position: relative;
  padding: 0 0.8px;

  div {
    position: absolute;

    img {
      width: 100%;
      position: relative;
      object-fit: contain;
    }
  }
`