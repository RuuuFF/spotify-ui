import { connect } from "react-redux"

import styled from "styled-components"
import Icons from "./icons"
import UserButtonDropdown from "./userButtonDropdown"

const MainHeader = ({ header, refference }) => {
  const backgroundStyles = {
    background: header.background,
    opacity: header.opacity
  }

  return (
    <Header ref={refference} style={{ left: `${header.left}px` }}>
      <div className="background" style={backgroundStyles}></div>
      <div className="nav-btn-container">
        <button className="btn left" disabled>
          <Icons icon="arrow-large" />
        </button>
        <button className="btn right" disabled>
          <Icons icon="arrow-large" />
        </button>
      </div>
      <UserButtonDropdown />
    </Header>
  )
}

const mapStateToProps = state => ({ header: state.structure.header })
export default connect(mapStateToProps)(MainHeader)

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  position: fixed;
  top: 0;
  right: 0;
  padding: 1.6rem 3.2rem;
  transition: background-color 0.2s linear;
  z-index: 10;

  .background {
    position: absolute;
    inset: 0;
    transition: background-color 0.8s ease;
    z-index: -2;

    &::before {
      content: "";
      position: absolute;
      inset: 0;
      background-image: linear-gradient(hsl(0deg 0% 8% / .75), hsl(0deg 0% 8% / .75));
      z-index: -1;
    }
  }

  .nav-btn-container {
    display: flex;
    gap: 1.6rem;

    .btn {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 3.2rem;
      height: 3.2rem;
      color: var(--white);
      background-color: var(--black-op-07);
      border-radius: 50%;

      &:disabled {
        opacity: 0.7;
        cursor: not-allowed;
      }

      &.left {
        transform: rotate(-180deg)
      }

      & > svg {
        width: 22px;
        height: 22px;
        opacity: 0.9;
      }
    }
  }
`