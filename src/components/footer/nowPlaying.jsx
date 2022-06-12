import { useEffect, useRef, useState } from "react"

import { connect } from "react-redux";
import { bindActionCreators } from "@reduxjs/toolkit";
import { toggleLiked } from "../../store/playerSlice";
import { toggleExpandAlbum } from "../../store/structureSlice";

import styled from "styled-components"
import Icons from "../icons"
import { grow, shake } from "../../assets/styles/keyframes"

const NowPlaying = ({ currentMusic, toggleLiked, expandAlbum, toggleExpandAlbum }) => {
  const image = useRef(null)
  const [right, setRight] = useState(0)
  const [animation, setAnimation] = useState("")

  useEffect(() => setRight(image.current.getBoundingClientRect().right), [])

  useEffect(() => {
    if (currentMusic.liked || animation !== "") {
      setAnimation(currentMusic.liked ? "liked" : "shake")
    }
  }, [currentMusic.liked, animation])

  return (
    <Container>
      <div style={{
        transform: `translateX(-${expandAlbum ? right : 0}px)`,
        transition: `transform 0.4s ${expandAlbum ? 'ease-out 0s' : 'ease-in .4s'}`
      }}>
        <div className="album-image-container">
          {!expandAlbum ? (
            <button className="expand-image" onClick={() => toggleExpandAlbum()}>
              <Icons icon="arrow" />
            </button>
          ) : false}
          <img
            ref={image}
            className="album-image"
            src={currentMusic.albumImage}
            alt={currentMusic.artist} />
        </div>

        <div className="music-container">
          <a href="/" className="music-name" onClick={e => e.preventDefault()}>
            {currentMusic.name}
          </a>
          <a href="/" className="music-artist" onClick={e => e.preventDefault()}>
            {currentMusic.artist}
          </a>
        </div>

        <div className="button-container">
          <button
            className={`btn ${animation}`}
            onClick={() => toggleLiked()}>
            <Icons icon={currentMusic.liked ? "heart-green" : "heart"} />
          </button>
          <button className="btn">
            <Icons icon="popup" />
          </button>
        </div>
      </div>
    </Container>
  )
}

const mapStateToProps = state => ({
  expandAlbum: state.structure.expandAlbum,
  currentMusic: state.player.currentMusic
})
const mapDispatchToProps = dispatch => bindActionCreators({
  toggleExpandAlbum,
  toggleLiked
}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(NowPlaying)

const Container = styled.div`
  width: 30%;
  min-width: 18rem;

  > div {
    display: flex;
    align-items: center;
    height: 100%;
  }

  .album-image-container {
    position: relative;
    width: 5.6rem;
    height: 5.6rem;

    &:hover .expand-image {
      opacity: 1;
    }
  }

  .expand-image {
    position: absolute;
    top: 0.5rem;
    right: 0.5rem;
    height: 2.4rem;
    width: 2.4rem;
    border-radius: 50%;
    background-color: rgba(0, 0, 0, .7);
    color: var(--white-op-07);
    opacity: 0;

    &:hover {
      background-color: rgba(0, 0, 0, .8);
      transform: scale(1.1);
      color: var(--white);
    }
  }

  .album-image {
    width: 100%;
    height: 100%;
    -webkit-user-drag: none;
  }

  .music-container {
    display: flex;
    flex-direction: column;
    margin: 0 1.4rem;
    line-height: var(--lh-16);
    font-family: "Spotify Circular Book";
    overflow: hidden;
    
    .music-name {
      white-space: nowrap;
      text-overflow: ellipsis;
      font-size: var(--fs-14);
      overflow: hidden;
    }
    
    .music-artist {
      color: var(--gray);
      white-space: nowrap;
      text-overflow: ellipsis;
      font-size: var(--fs-11);
      overflow: hidden;
    }

    & :is(.music-name, .music-artist):hover {
      text-decoration: underline;
      color: var(--white);
    }
  }

  .button-container {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    margin-left: 0.6rem;
    color: var(--white);
  }

  .btn {
    position: relative;
    width: 3.2rem;
    height: 3.2rem;
    z-index: 10;
    opacity: 0.7;
    color: inherit;
    
    &.liked {
      color: var(--green);
    }

    &.liked::before {
      position: absolute;
      content: "";
      top: 50%;
      left: 50%;
      width: 100%;
      height: 100%;
      border-radius: 50%;
      transform: translate(-50%, -50%);
      background-color: var(--green);
      animation: ${grow} 0.4s linear forwards;
      z-index: 9;
    }

    &:is(.liked, :hover) {
      opacity: 1;
    }

    &.shake {
      animation: ${shake} 0.4s linear;
    }
  }
`