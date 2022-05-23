import { useState } from "react"
import styled from "styled-components"
import ControlButton from "./controlButton"
import Range from "./range"

const PlayerControl = props => {
  const [isPlaying, setIsPlaying] = useState(false)

  return (
    <Container>
      <div className="player-controls">
        <div className="control left">
          <ControlButton button="shuffle" />
          <ControlButton button="prev-song" />
        </div>
        <div className="main-control">
          <ControlButton
            button="playpause"
            isPlaying={isPlaying}
            action={() => setIsPlaying(!isPlaying)} />
        </div>
        <div className="control right">
          <ControlButton button="next-song" />
          <ControlButton button="repeat" />
        </div>
      </div>

      <div className="playback-bar-container">
        <div className="playback-time current">
          <span>0:00</span>
        </div>
        <div className="playback-progress-bar-container">
          <Range />
        </div>
        <div className="playback-time total">
          <span>3:19</span>
        </div>
      </div>
    </Container>
  )
}

export default PlayerControl

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  max-width: 72.2rem;
  width: 40%;

  .player-controls {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    gap: 1.6rem;
    margin-bottom: 0.8rem;

    .control {
      display: flex;
      gap: 0.8rem;
      width: 100%;

      &.left {
        justify-content: flex-end;
      }

      &.right {
        justify-content: flex-start;
      }
    }
  }

  .playback-bar-container {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.8rem;

    .playback-time {
      color: var(--gray2);
      font-size: var(--fs-11);
      line-height: var(--lh-16);
      min-width: 4rem;
      font-family: "Spotify Circular Book";

      > span {
        display: block;
      }

      &.current > span{
        text-align: right;
      }

      &.total > span {
        text-align: left;
      }
    }

    .playback-progress-bar-container {
      width: 100%;
    }
  }
`