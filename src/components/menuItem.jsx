import styled from "styled-components"

const MenuItem = props => (
  <Li>
    <a href={props.path} className={props.active ? 'active' : ''}>
      {props.icon}<span>{props.label}</span>
    </a>
  </Li>
)

export default MenuItem

const Li = styled.li`
  a {
    display: flex;
    gap: 1.6rem;
    padding: 0 1.6rem;
    align-items: center;
    height: 4rem;
    transition: color 0.2s linear;
    font-size: var(--fs-14);
    color: var(--gray);
    line-height: var(--lh-16);
    font-weight: 700;
    font-family: "Spotify Circular Bold";

    svg {
      transition: fill 0.2s linear;
    }

    &:is(.active, :hover) {
      color: var(--white);

      svg {
        fill: var(--white);
      }
    }
  }
`