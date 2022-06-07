import { useRef, useEffect, useCallback } from "react"

import { connect } from "react-redux"
import { bindActionCreators } from "@reduxjs/toolkit"
import { scaleHeaderBgOpacity } from "../../store/structureSlice"

import { Container } from "./style"

import { Routes, Route } from "react-router-dom"
import MainHeader from "../../components/mainHeader"
import MainPage from "./pages/mainPage"
import Playlist from "./pages/playlist"

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
      <MainHeader refference={header} />

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