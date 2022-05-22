import { useState } from "react"

import styled from "styled-components"

import { grow, shake } from "../styles/keyframes"
import { toggleAlbum } from "../store/spotifyReducer";
import { useDispatch } from "react-redux";

import Icons from "./icons"

const NowPlaying = props => {
  const [liked, setLiked] = useState(false)
  const dispatch = useDispatch()
  const [animation, setAnimation] = useState('')

  function animate() {
    setAnimation(liked ? "shake" : "liked")
    setLiked(!liked)
  }

  return (
    <Container>
      <div className="album-image-container">
        <button className="expand-image" onClick={() => dispatch(toggleAlbum())}>
          <Icons icon="arrow-up" />
        </button>
        <img className="album-image" src={"./images/image1.jpg"} alt="WALK THE MOON" />
      </div>

      <div className="music">
        <a href="/" className="music-name" onClick={e => e.preventDefault()}>
          Shut Up and Dance
        </a>
        <a href="/" className="music-artist" onClick={e => e.preventDefault()}>
          WALK THE MOON
        </a>
      </div>

      <div className="buttons">
        <button className={`btn ${animation}`} onClick={animate}>
          <Icons like={liked} icon="heart" />
        </button>
        <button className="btn">
          <Icons icon="popup" />
        </button>
      </div>
    </Container>
  )
}

export default NowPlaying

const Container = styled.div`
  width: 30%;
  min-width: 18rem;
  display: flex;
  align-items: center;

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
`