import { connect } from "react-redux"

import styled from "styled-components"
import PlaylistItem from "./playlistItem"

const Playlists = ({ playlists = [] }) => (
  <Container>
    <ul>
      {playlists.map(playlist => <PlaylistItem
        key={playlist.id}
        playlist={playlist} />)}
    </ul>
  </Container>
)

const mapStateToProps = state => ({ playlists: state.spotify.playlists })
export default connect(mapStateToProps)(Playlists)

const Container = styled.div`
  flex: 1;
  padding: 0.8rem 0;
  overflow-x: auto;

  > ul {
    display: flex;
    flex-direction: column-reverse;
  }

  &::-webkit-scrollbar {
    width: 12px;
  }
  
  &::-webkit-scrollbar-thumb {
    background: rgba(255, 255, 255, 0.3);
  }
  
  &::-webkit-scrollbar-thumb:hover {
    background: rgba(255, 255, 255, 0.5);
  }
`