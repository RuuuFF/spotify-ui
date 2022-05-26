import styled from "styled-components"
import { connect } from "react-redux"
import { selectTab } from "../store/spotifySlice"

const UserPlaylistItem = props => {
  const { label, activeTab, dispatch } = props
  const active = activeTab === label

  function handleLink(event) {
    event.preventDefault()
    dispatch(selectTab(label))
  }

  return (
    <li>
      <Link href="/" onClick={handleLink} className={active ? 'active' : ''}>
        <div>
          {label}
        </div>
      </Link>
    </li>
  )
}

const mapStateToProps = state => ({ activeTab: state.spotify.tabs.activeTab })
export default connect(mapStateToProps)(UserPlaylistItem)

const Link = styled.a`
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

  > div {
    padding: 0 2.4rem;
  }

  :is(:hover, .active) {
    opacity: 1;
  }

  ::before {
    position: absolute;
    content: '';
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 10;
  }
`