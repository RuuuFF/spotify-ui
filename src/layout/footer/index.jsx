import NowPlaying from "../../components/nowPlaying"
import MainPlayerControl from "../../components/mainPlayerControl"
import RightPlayerControl from "../../components/rightPlayerControl"

import { PlayerContainer } from "./styles"

const Footer = props => {
  return (
    <PlayerContainer>
      <NowPlaying />
      <MainPlayerControl />
      <RightPlayerControl />
    </PlayerContainer>
  )
}

export default Footer