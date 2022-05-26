import { connect } from "react-redux"

import styled from "styled-components"
import UserPlaylistItem from "./userPlaylistItem"

const UserPlaylists = ({ playlists = [] }) => (
  <Container>
    {playlists.map((name, index) => <UserPlaylistItem key={index} label={name} />)}
  </Container>
)

const mapStateToProps = state => ({ playlists: state.spotify.playlists })
export default connect(mapStateToProps)(UserPlaylists)

const Container = styled.ul`
  padding: 0.8rem 0;
  flex: 1;
  overflow-x: auto;

  ::-webkit-scrollbar {
    width: 12px;
  }
  
  ::-webkit-scrollbar-thumb {
    background: rgba(255, 255, 255, 0.3);
  }
  
  ::-webkit-scrollbar-thumb:hover {
    background: rgba(255, 255, 255, 0.5);
  }
`