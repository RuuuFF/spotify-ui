import { useDispatch, useSelector } from "react-redux"
import { selectTab } from "../store/reducers/tabReducer"

import styled from "styled-components"
import Icons from "./icons"

const MenuItem = props => {
  const { label, path } = props
  const labelLowerCase = label.toLowerCase()
  const active = useSelector(state => state.tab.active?.[labelLowerCase] || false)
  const dispatch = useDispatch()

  function handleLink(event) {
    event.preventDefault()
    dispatch(selectTab(labelLowerCase))
  }

  return (
    <li>
      <Link
        className={active ? 'active' : ''} href={path}
        onClick={props.action ? props.action : handleLink}
        fonts={props.font}
        padding={props.padding}>
        <Icons icon={labelLowerCase} active={active}
          bg={props.bg} margin={props.margin} />
        <span>{label}</span>
      </Link>
    </li>
  )
}

export default MenuItem

const Link = styled.a`
  display: flex;
  gap: 1.6rem;
  align-items: center;
  padding: 0 ${props => props.padding ? '2.4rem' : '1.6rem'};
  height: 4rem;
  font-weight: 700;
  color: var(--white);
  font-size: var(--fs-14);
  line-height: var(--lh-16);
  font-family: "Spotify Circular Bold";
  opacity: 0.7;
  transition: opacity 0.2s linear;

  svg {
    transition: fill 0.2s linear;
  }

  :is(.active, :hover) {
    opacity: 1;
  }
`