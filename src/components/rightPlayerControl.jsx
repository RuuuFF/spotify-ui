import { connect } from "react-redux"
import { selectTab, updateVolume } from "../store/spotifyReducer"

import styled from "styled-components"

import ControlButton from "./controlButton"
import Range from "./range"

const RightPlayerControl = ({ volume, maxVolume, dispatch }) => {
  return (
    <Container>
      <ControlButton button="lyric" action={() => dispatch(selectTab("Lyric"))} />
      <ControlButton button="queue" action={() => dispatch(selectTab("Queue"))} />
      <ControlButton button="device" />
      <div>
        <ControlButton button="volume" volume={volume} />
        <Range
          value={volume}
          onChange={value => dispatch(updateVolume(value))}
          max={maxVolume} />
      </div>
    </Container>
  )
}

const mapStateToProps = state => ({
  volume: state.spotify.volume,
  maxVolume: state.spotify.maxVolume
})
export default connect(mapStateToProps)(RightPlayerControl)

const Container = styled.div`
  display: flex;
  width: 30%;
  min-width: 18rem;
  justify-content: flex-end;
  align-items: center;

  > div {
    display: flex;
    align-items: center;

    > input {
      width: 93px;
    }
  }
`