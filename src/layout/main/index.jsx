import { useRef, useEffect, useCallback } from "react"
import { Routes, Route } from "react-router-dom"
import { connect } from "react-redux"
import { bindActionCreators } from "@reduxjs/toolkit"
import { scaleHeaderBgOpacity } from "../../store/structureSlice"

import Header from "../../components/main/header"
import MainPage from "../../components/main/mainPage"
import PlaylistPage from "../../components/main/playlistPage"
import { Container } from "./style"

const Main = ({ scaleHeaderBgOpacity, playlists }) => {
  const header = useRef(null)
  const triggerElement = useRef(null)

  const scroll = useCallback(() => {
    const headerBottom = header.current.getBoundingClientRect().bottom
    const triggerElementTop = triggerElement.current?.getBoundingClientRect().top

    if (headerBottom && triggerElementTop) {
      scaleHeaderBgOpacity({ headerBottom, triggerElementTop })
    }
  }, [scaleHeaderBgOpacity])

  useEffect(scroll, [scroll])

  return (
    <Container onScroll={scroll}>
      <Header reference={header} />

      <Routes>
        <Route path="/" element={<MainPage reference={triggerElement} />} />
        <Route path="*" element={<MainPage reference={triggerElement} />} />

        <Route path="/playlist">
          {playlists.map((playlist, index) => <Route
            key={playlist.id}
            path={`${playlist.id}`}
            element={<PlaylistPage playlist={{ ...playlist, index }} />} />
          )}
        </Route>
      </Routes>
    </Container>
  )
}

const mapStateToProps = state => ({
  headerBackground: state.structure.header.background,
  playlists: state.spotify.playlists
})
const mapDispatchToProps = dispatch => bindActionCreators({ scaleHeaderBgOpacity }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(Main)