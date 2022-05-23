import styled from "styled-components"
import { connect } from "react-redux";
import { toggleAlbum } from "../store/spotifyReducer"
import Icons from "./icons";

import MenuItem from "./menuItem";
import { useEffect, useRef, useState } from "react";

const SidebarFooter = ({ expandedAlbum, dispatch }) => {
  const [height, setHeight] = useState(null)
  const image = useRef(null)

  useEffect(() => expandedAlbum ? setHeight(image.current.getBoundingClientRect().height) : setHeight(0), [expandedAlbum])

  return (
    <Container>
      <div style={{
        transform: `translateY(-${height || 0}px)`,
        transition: `transform 0.4s ${expandedAlbum ? 'ease-in .4s' : 'ease-out 0s'}`
      }}>
        <ul>
          <MenuItem path="/install" label="Install App" margin />
        </ul>

        <div className="album-image-container">
          <div className="wrapper">
            {expandedAlbum ? (
              <button className="expand-image rotate" onClick={() => dispatch(toggleAlbum())}>
                <Icons icon="arrow-up" />
              </button>
            ) : false}
            <img
              ref={image}
              className="album-image"
              src="./images/image1.jpg"
              alt="Walk The Moon" />
          </div>
        </div>
      </div>
    </Container>
  )
}

const mapStateToProps = state => ({ expandedAlbum: state.spotify.expandedAlbum })
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