import styled from "styled-components"
import Icons from "./icons";

const ControlButton = ({ button, action, isPlaying = false }) => (
  <Button
    onClick={action ? action : event => event.preventDefault()}
    mainControl={button === "playpause"}>
    <Icons icon={button} playing={isPlaying} />
  </Button>
)

export default ControlButton

const Button = styled.button`
  width: 3.2rem;
  height: 3.2rem;
  opacity: ${props => props.mainControl ? '1' : '0.7'};

  :hover {
    opacity: 1;
  }

  :active {
    opacity: ${props => props.mainControl ? '1' : '0.7'};
  }
`