import { useEffect, useRef, useState } from "react"
import { connect } from "react-redux";
import { bindActionCreators } from "@reduxjs/toolkit";

import styled from "styled-components"

import Icons from "./icons"
import { grow, shake } from "../assets/styles/keyframes"
import { toggleAlbum, toggleLiked } from "../store/spotifyReducer";

const NowPlaying = ({ currentMusic, expandAlbum, toggleAlbum, toggleLiked }) => {
  const image = useRef(null)
  const [right, setRight] = useState(0)
  const [animation, setAnimation] = useState("")

  useEffect(() => {
    if (currentMusic.liked || animation !== "") {
      setAnimation(currentMusic.liked ? "liked" : "shake")
    }
  }, [currentMusic.liked, animation])

  useEffect(() => {
    const right = image.current.getBoundingClientRect().right
    setRight(right)
  }, [expandAlbum])

  return (
    <Container>
      <div style={{
        transform: `translateX(-${expandAlbum ? right : 0}px)`,
        transition: `transform 0.4s ${expandAlbum ? 'ease-out 0s' : 'ease-in .4s'}`
      }}>
        <div className="album-image-container" >
          {!expandAlbum ? (
            <button className="expand-image" onClick={() => toggleAlbum()}>
              <Icons icon="arrow" />
            </button>
          ) : false}
          <img
            ref={image}
            className="album-image"
            src={currentMusic.albumImage}
            alt={currentMusic.artist} />
        </div>

        <div className="music">
          <a href="/" className="music-name" onClick={e => e.preventDefault()}>
            {currentMusic.name}
          </a>
          <a href="/" className="music-artist" onClick={e => e.preventDefault()}>
            {currentMusic.artist}
          </a>
        </div>

        <div className="buttons">
          <button className={`btn ${animation}`} onClick={() => toggleLiked()}>
            <Icons icon="heart" liked={currentMusic.liked} />
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
  expandAlbum: state.spotify.player.expandAlbum,
  currentMusic: state.spotify.player.currentMusic
})
const mapDispatchToProps = dispatch => bindActionCreators({
  toggleAlbum,
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

    .album-image-container {
      position: relative;
      width: 5.6rem;
      height: 5.6rem;

      .expand-image {
        position: absolute;
        top: 0.5rem;
        right: 0.5rem;
        height: 2.4rem;
        width: 2.4rem;
        border-radius: 50%;
        background-color: rgba(0, 0, 0, .7);
        opacity: 0;

        > svg {
          opacity: 0.7;
        }

        :hover {
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

      .album-image {
        width: 100%;
        height: 100%;
      }
    }

    .music {
      display: flex;
      flex-direction: column;
      margin: 0 1.4rem;
      line-height: var(--lh-16);
      font-family: "Spotify Circular Book";
      
      .music-name {
        font-size: var(--fs-14);
      }
      
      .music-artist {
        font-size: var(--fs-11);
        color: var(--gray);
      }

      & :is(.music-name, .music-artist):hover {
        text-decoration: underline;
        color: var(--white);
      }
    }

    .buttons {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: row;
      margin-left: 0.6rem;

      .btn {
        position: relative;
        width: 3.2rem;
        height: 3.2rem;
        z-index: 10;
        opacity: 0.7;

        &.shake > svg {
          animation: ${shake} 0.4s linear;
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

        :is(.liked, :hover) {
          opacity: 1;
        }
      }
    }
  }

`