import { connect } from "react-redux"
import { bindActionCreators } from "@reduxjs/toolkit"
import { selectTab } from "../store/spotifySlice"
import { updateVolume, toggleMute } from "../store/playerSlice"

import styled from "styled-components"

import ControlButton from "./controlButton"
import Range from "./range"

const RightPlayerControl = props => {
  const { currentVolume, maxVolume, selectTab, updateVolume, toggleMute } = props
  return (
    <Container>
      <ControlButton
        button="lyric"
        action={() => selectTab("Lyric")} />
      <ControlButton
        button="queue"
        action={() => selectTab("Queue")} />
      <ControlButton button="device" />
      <div>
        <ControlButton
          button="volume"
          volume={currentVolume}
          action={toggleMute} />
        <Range
          value={currentVolume}
          max={maxVolume}
          onChange={value => updateVolume(value)} />
      </div>
    </Container>
  )
}

const mapStateToProps = state => ({
  currentVolume: state.player.volume.currentVolume,
  maxVolume: state.player.volume.maxVolume
})
const mapDispatchToProps = dispatch => bindActionCreators({
  selectTab,
  updateVolume,
  toggleMute
}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(RightPlayerControl)

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