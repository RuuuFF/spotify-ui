import { useEffect, useRef, useState } from "react";

import { connect } from "react-redux";
import { bindActionCreators } from "@reduxjs/toolkit";
import { toggleExpandAlbum } from "../store/structureSlice"

import styled from "styled-components"
import MenuItem from "./menuItem";
import Icons from "./icons";

const SidebarFooter = ({ expandAlbum, albumImage, toggleExpandAlbum }) => {
  const [height, setHeight] = useState(null)
  const image = useRef(null)

  useEffect(() => {
    const height = image.current.getBoundingClientRect().height
    expandAlbum ? setHeight(height) : setHeight(0)
  }, [expandAlbum])

  return (
    <Container>
      <div style={{
        transform: `translateY(-${height || 0}px)`,
        transition: `transform 0.4s ${expandAlbum ? 'ease-in .4s' : 'ease-out 0s'}`
      }}>
        <ul>
          <MenuItem path="/install" label="Install App" icon="download" margin />
        </ul>

        <div className="album-image-container">
          <div className="wrapper">
            {expandAlbum ? (
              <button className="expand-image rotate" onClick={() => toggleExpandAlbum()}>
                <Icons icon="arrow" />
              </button>
            ) : false}
            <img
              ref={image}
              src={albumImage}
              className="album-image"
              alt="Walk The Moon" />
          </div>
        </div>
      </div>
    </Container>
  )
}

const mapStateToProps = state => ({
  expandAlbum: state.structure.expandAlbum,
  albumImage: state.player.currentMusic.albumImage
})
const mapDispatchToProps = dispatch => bindActionCreators({
  toggleExpandAlbum
}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(SidebarFooter)

const Container = styled.div`
  position: relative;
  padding: 0 0.8px;
  z-index: 4;

  > div {
    background-color: var(--sidebar-nav-bg);
  }

  .album-image-container {
    position: absolute;
    top: 100%;

    .wrapper {
      position: relative;
      width: 100%;
      height: 100%;
      
      .expand-image {
        position: absolute;
        top: 0.5rem;
        right: 0.5rem;
        height: 2.4rem;
        width: 2.4rem;
        border-radius: 50%;
        background-color: rgba(0, 0, 0, .7);
        color: var(--white);
        opacity: 0;

        &.rotate {
          transform: rotate(180deg);
        }
    
        & > svg {
          opacity: 0.7;
        }
    
        &:hover {
          background-color: rgba(0, 0, 0, .8);
          transform: scale(1.1) rotate(180deg);
    
          & > svg {
            opacity: 1;
          }
        }
      }
    
      &:hover .expand-image {
        opacity: 1;
      }
    }

    .album-image {
      width: 100%;
      object-fit: contain;
    }
  }
`