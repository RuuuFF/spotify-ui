import styled from "styled-components"
import { useDispatch, useSelector } from "react-redux"
import { selectTab } from "../store/reducers/tabReducer"

const PlaylistItem = props => {
  const labelLowerCase = props?.label.toLowerCase()
  const active = useSelector(state => state.tab.active?.[labelLowerCase] || false)
  const dispatch = useDispatch()

  function handleLink(event) {
    event.preventDefault()
    dispatch(selectTab(labelLowerCase))
  }

  return (
    <li>
      <Link href="/" onClick={handleLink} className={active ? 'active' : ''}>
        <div>
          {props?.label}
        </div>
      </Link>
    </li>
  )
}

export default PlaylistItem

const Link = styled.a`
  height: 3.2rem;
  line-height: var(--lh-32);
  font-size: var(--fs-14);
  font-family: "Spotify Circular Book";
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