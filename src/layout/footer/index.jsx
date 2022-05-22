import NowPlaying from "../../components/nowPlaying"

import {
  PlayerContainer,
  PlayerControl,
  PlayerButtons,
} from "./styles"

const Footer = props => {
  return (
    <PlayerContainer>
      <NowPlaying />

      <PlayerControl></PlayerControl>

      <PlayerButtons></PlayerButtons>
    </PlayerContainer>
  )
}

export default Footer