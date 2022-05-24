import { connect } from "react-redux"

import styled from "styled-components"
import Icons from "./icons";

const ControlButton = ({ button, action, isPlaying = false, volume, activeTab }) => {
  const active = button === activeTab.toLowerCase()
  const myAction = action ? () => action() : event => event.preventDefault()

  return (
    <Button
      onClick={myAction}
      mainControl={button === "playpause"}
      className={active ? "active" : ""}>
      <Icons
        icon={button}
        active={active}
        playing={button === "playpause" ? isPlaying : false}
        volume={button === "volume" ? volume : false} />
    </Button>
  )
}

const mapStateToProps = state => ({ activeTab: state.spotify.tabs.activeTab })
export default connect(mapStateToProps)(ControlButton)

const Button = styled.button`
  position: relative;
  width: 3.2rem;
  height: 3.2rem;
  opacity: ${props => props.mainControl ? '1' : '0.7'};

  :hover {
    opacity: 1;
  }

  :active {
    opacity: ${props => props.mainControl ? '1' : '0.7'};
  }

  &.active {
    opacity: 1;
  }

  &.active::before {
    position: absolute;
    content: "";
    top: 92%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 4px;
    height: 4px;
    background: var(--green);
    border-radius: 2px;
  }
`