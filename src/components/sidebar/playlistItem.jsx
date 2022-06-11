import { connect } from "react-redux"
import { Link } from "react-router-dom"
import styled from "styled-components"

const UserPlaylistItem = ({ playlist, activeTab, tabId }) => (
  <Li>
    <Link
      to={`/playlist/${playlist.id}`}
      className={activeTab === playlist.name && tabId === playlist.id ? 'active' : ''}>
      <span>
        {playlist.name}
      </span>
    </Link>
  </Li>
)

const mapStateToProps = state => ({
  activeTab: state.spotify.tabs.activeTab,
  tabId: state.spotify.tabs.tabId
})
export default connect(mapStateToProps)(UserPlaylistItem)

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
    user-select: none;
    -webkit-user-drag: none;
  }

  a > span {
    display: block;
    padding: 0 2.4rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  a:is(:hover, .active) {
    opacity: 1;
  }
`