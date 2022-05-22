import { connect } from "react-redux"
import { selectTab } from "../store/spotifyReducer"

import styled from "styled-components"
import Icons from "./icons"

const MenuItem = props => {
  const { label, path, action, bg, activeTab, dispatch } = props
  const active = label === activeTab

  const handleClick = props?.action ? (event, label) => action(event, label) : event => {
    event.preventDefault()
    dispatch(selectTab(label))
  }

  let classes = ''
  classes += active ? 'active' : ''
  classes += props?.margin ? ' margin' : ''
  classes += props?.padding ? ' padding' : ''

  return (
    <li>
      <Link className={classes} href={path} onClick={handleClick}>
        <Icons icon={label} active={active} bg={bg} />
        <span>{label}</span>
      </Link>
    </li>
  )
}

export default connect(state => ({
  activeTab: state.spotify.tabs.activeTab
}))(MenuItem)

const Link = styled.a`
  display: flex;
  gap: 1.6rem;
  align-items: center;
  padding: 0 1.6rem;
  height: 4rem;
  font-weight: 700;
  color: var(--white);
  font-size: var(--fs-14);
  line-height: var(--lh-16);
  font-family: "Spotify Circular Bold", sans-serif;
  opacity: 0.7;
  transition: opacity 0.2s linear;

  &.padding {
    padding: 0 2.4rem;
  }

  &.margin {
    > svg {
      padding-right: 0.4rem;
      margin-left: 0.7rem;
    }
  }

  &:is(.active, :hover) {
    opacity: 1;
  }
`