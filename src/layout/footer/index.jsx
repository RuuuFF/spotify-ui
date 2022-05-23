import NowPlaying from "../../components/nowPlaying"
import PlayerControl from "../../components/playerControl"

import {
  PlayerContainer,
  PlayerButtons,
} from "./styles"

const Footer = props => {
  return (
    <PlayerContainer>
      <NowPlaying />
      <PlayerControl />

      <PlayerButtons></PlayerButtons>
    </PlayerContainer>
  )
}

export default Footer