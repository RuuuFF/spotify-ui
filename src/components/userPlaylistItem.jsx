import { connect } from "react-redux"
import { bindActionCreators } from "@reduxjs/toolkit"
import { selectTab } from "../store/spotifySlice"

import styled from "styled-components"
import { Link } from "react-router-dom"

const UserPlaylistItem = ({ playlist, activeTab, selectTab }) => (
  <Li>
    <Link
      to={`/playlist/${playlist.id}`}
      onClick={() => selectTab(playlist.name)}
      className={activeTab === playlist.name ? 'active' : ''}>
      <div>
        {playlist.name}
      </div>
    </Link>
  </Li>
)

const mapStateToProps = state => ({ activeTab: state.spotify.tabs.activeTab })
const mapDispatchToProps = dispatch => bindActionCreators({ selectTab }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(UserPlaylistItem)

const Li = styled.li`
  a {
    height: 3.2rem;
    line-height: var(--lh-32);
    font-size: var(--fs-14);
    font-family: "Spotify Circular Book", sans-serif;
    display: block;
    width: 100%;
    height: 100%;
    opacity: 0.64;
    position: relative;
    cursor: default;

  }

  a > div {
    padding: 0 2.4rem;
  }

  a:is(:hover, .active) {
    opacity: 1;
  }

  a::before {
    position: absolute;
    content: '';
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 10;
  }
`