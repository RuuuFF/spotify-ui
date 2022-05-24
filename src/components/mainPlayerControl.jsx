import { connect } from "react-redux"
import { togglePlayer, updateTime, prevMusic } from "../store/spotifyReducer"

import styled from "styled-components"

import ControlButton from "./controlButton"
import Range from "./range"
import useTimer from "../hooks/useTimer"
import useFormatTime from "../hooks/useFormatTime"

const MainPlayerControl = ({ time, durationInSeconds, isPlaying, dispatch }) => {
  useTimer({ time, isPlaying, durationInSeconds })

  const runningTime = useFormatTime(time)
  const finalTime = useFormatTime(durationInSeconds)

  return (
    <Container>
      <div className="player-controls">
        <div className="control left">
          <ControlButton button="shuffle" />
          <ControlButton
            button="prev-music"
            action={() => dispatch(prevMusic())} />
        </div>
        <div className="main-control">
          <ControlButton
            button="playpause"
            isPlaying={isPlaying}
            action={() => dispatch(togglePlayer())} />
        </div>
        <div className="control right">
          <ControlButton button="next-music" />
          <ControlButton button="repeat" />
        </div>
      </div>

      <div className="playback-bar-container">
        <div className="playback-time current">
          <span>{runningTime}</span>
        </div>
        <div className="playback-progress-bar-container">
          <Range
            value={time}
            onChange={value => dispatch(updateTime(value))}
            max={durationInSeconds} />
        </div>
        <div className="playback-time total">
          <span>{finalTime}</span>
        </div>
      </div>
    </Container>
  )
}

const mapStateToProps = state => ({
  durationInSeconds: state.spotify.currentMusic.durationInSeconds,
  time: state.spotify.time,
  isPlaying: state.spotify.isPlaying
})
export default connect(mapStateToProps)(MainPlayerControl)

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