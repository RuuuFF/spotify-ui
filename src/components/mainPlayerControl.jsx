import { useEffect } from "react"
import { connect } from "react-redux"
import { bindActionCreators } from "@reduxjs/toolkit"
import { togglePlaying, updateTime, prevMusic } from "../store/playerSlice"

import styled from "styled-components"
import useFormatMMSS from "../hooks/useFormatTime"
import ControlButton from "./controlButton"
import Range from "./range"

const MainPlayerControl = props => {
  const { time, isPlaying, durationInSeconds, togglePlaying, updateTime, prevMusic } = props
  const runningTime = useFormatMMSS(time)
  const finalTime = useFormatMMSS(durationInSeconds)

  useEffect(() => {
    const timerId = isPlaying ? setInterval(() => {
      updateTime(time + 1)
    }, 1000) : false

    return () => clearInterval(timerId)
  }, [time, isPlaying, durationInSeconds, togglePlaying, updateTime])

  return (
    <Container>
      <div className="player-controls">
        <div className="control left">
          <ControlButton icon="shuffle" />
          <ControlButton
            icon="prev-music"
            action={prevMusic} />
        </div>
        <div className="main-control">
          <ControlButton
            icon="playpause"
            isPlaying={isPlaying}
            action={togglePlaying} />
        </div>
        <div className="control right">
          <ControlButton icon="next-music" />
          <ControlButton icon="repeat" />
        </div>
      </div>

      <div className="playback-bar-container">
        <div className="playback-time current">
          <span>{runningTime}</span>
        </div>
        <div className="playback-progress-bar-container">
          <Range
            value={time}
            onChange={value => updateTime(value)}
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
  durationInSeconds: state.player.currentMusic.durationInSeconds,
  time: state.player.time,
  isPlaying: state.player.isPlaying
})
const mapDispatchToProps = dispatch => bindActionCreators({
  togglePlaying,
  updateTime,
  prevMusic,
}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(MainPlayerControl)

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