import { connect } from "react-redux"
import { useEffect, useRef, useState } from "react"

import styled from "styled-components"
import UserPlaylistItem from "./userPlaylistItem"

const UserPlaylists = ({ playlists = [] }) => {
  const [height, setHeight] = useState(null)
  const element = useRef(null)

  useEffect(() => setHeight(element.current.getBoundingClientRect().height), [])

  return (
    <Container ref={element} height={height}>
      {height ? (
        playlists.map((name, index) => <UserPlaylistItem key={index} label={name} />)
      ) : false}
    </Container>
  )
}

const mapStateToProps = state => ({ playlists: state.spotify.playlists })
export default connect(mapStateToProps)(UserPlaylists)

const Container = styled.ul`
  padding: 0.8rem 0;
  flex: 1;
  height: 100%;
  max-height: ${props => `${props?.height}px` || "100%"};
  overflow: auto;

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