import { useEffect, useRef, useState } from "react";
import { connect } from "react-redux";

import styled from "styled-components"

import MenuItem from "./menuItem";
import Icons from "./icons";
import { toggleAlbum } from "../store/spotifyReducer"

const SidebarFooter = ({ expandAlbum, albumImage, dispatch }) => {
  const [height, setHeight] = useState(null)
  const image = useRef(null)

  useEffect(() => expandAlbum ? setHeight(image.current.getBoundingClientRect().height) : setHeight(0), [expandAlbum])

  return (
    <Container>
      <div style={{
        transform: `translateY(-${height || 0}px)`,
        transition: `transform 0.4s ${expandAlbum ? 'ease-in .4s' : 'ease-out 0s'}`
      }}>
        <ul>
          <MenuItem path="/install" label="Install App" margin />
        </ul>

        <div className="album-image-container">
          <div className="wrapper">
            {expandAlbum ? (
              <button className="expand-image rotate" onClick={() => dispatch(toggleAlbum())}>
                <Icons icon="arrow-up" />
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
  expandAlbum: state.spotify.expandAlbum,
  albumImage: state.spotify.currentMusic.albumImage
})
export default connect(mapStateToProps)(SidebarFooter)

const Container = styled.div`
  position: relative;
  padding: 0 0.8px;
  z-index: 20;

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
      z-index: 20;
      
      .expand-image {
        position: absolute;
        top: 0.5rem;
        right: 0.5rem;
        height: 2.4rem;
        width: 2.4rem;
        border-radius: 50%;
        background-color: rgba(0, 0, 0, .7);
        opacity: 0;
        z-index: 21;

        &.rotate {
          transform: rotate(180deg);

          :hover {
            transform: scale(1.1) rotate(180deg);
          }
        }
    
        > svg {
          opacity: 0.7;
        }
    
        &:hover {
          background-color: rgba(0, 0, 0, .8);
          transform: scale(1.1);
    
          > svg {
            opacity: 1;
          }
        }
      }
    
      :hover .expand-image {
        opacity: 1;
      }
    }

    .album-image {
      width: 100%;
      position: relative;
      object-fit: contain;
    }
  }
`