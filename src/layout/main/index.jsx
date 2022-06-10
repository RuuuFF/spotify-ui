import { useRef, useEffect, useCallback } from "react"
import { Routes, Route } from "react-router-dom"

import { connect } from "react-redux"
import { bindActionCreators } from "@reduxjs/toolkit"
import { scaleHeaderBgOpacity } from "../../store/structureSlice"

import Header from "../../components/main/header"
import MainPage from "../../components/main/pages/mainPage"
import Playlist from "../../components/main/pages/playlist"

import { Container } from "./style"

const Main = ({ scaleHeaderBgOpacity, playlists }) => {
  const container = useRef(null)
  const header = useRef(null)
  const triggerElement = useRef(null)

  const scroll = useCallback(() => {
    const headerBottom = header.current.getBoundingClientRect().bottom
    const triggerElementTop = triggerElement.current.getBoundingClientRect().top

    scaleHeaderBgOpacity({ headerBottom, triggerElementTop })
  }, [scaleHeaderBgOpacity])

  useEffect(() => {
    container.current.addEventListener("scroll", scroll)
    scroll()
  }, [scroll])

  return (
    <Container ref={container}>
      <Header refference={header} />

      <Routes>
        <Route path="/" element={<MainPage refference={triggerElement} />} />
        <Route path="*" element={<MainPage refference={triggerElement} />} />

        <Route path="/playlist" >
          {playlists.map((playlist, index) => <Route
            key={playlist.id}
            path={`${playlist.id}`}
            element={<Playlist playlist={{ ...playlist, index }} />} />
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