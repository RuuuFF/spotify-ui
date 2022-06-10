import { connect } from "react-redux"
import { bindActionCreators } from "@reduxjs/toolkit"
import { toggleUserDropdown } from "../../store/structureSlice"

import Icons from "../icons"
import styled from "styled-components"

const UserButtonDropdown = ({ userDropdown, toggleUserDropdown }) => (
  <Container>
    <button
      className={`user-button ${userDropdown ? "active" : ""}`}
      onClick={() => toggleUserDropdown()}>
      <div className="user-image">
        <Icons icon="user" />
      </div>
      <div className="user-name">
        <span>ruuuff</span>
      </div>
      <div className="user-arrow">
        <Icons icon="triangle" />
      </div>
    </button>

    <div className={`dropdown-container ${userDropdown ? "active" : ""}`}>
      <ul>
        <li className="dropdown-item">
          <button>
            <span>Account</span>
            <Icons icon="redirect" />
          </button>
        </li>
        <li className="dropdown-item">
          <button>Profile</button>
        </li>
        <li className="dropdown-item">
          <button>Log out</button>
        </li>
      </ul>
    </div>
  </Container>
)

const mapStateToProps = state => ({ userDropdown: state.structure.userDropdown })
const mapDispatchToProps = dispatch => bindActionCreators({ toggleUserDropdown }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(UserButtonDropdown)

const Container = styled.div`
  position: relative;

  .user-button {
    display: flex;
    align-items: center;
    background-color: var(--black-op-07);
    color: var(--white);
    border-radius: 23px;
    padding: 0.2rem;
    gap: 0.8rem;
    cursor: pointer;

    &:is(:hover, .active) {
      background-color: var(--gray3);
    }
  }

  .user-image {
    width: 2.8rem;
    height: 2.8rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #535353;
    border-radius: 50%;

    > svg {
      transform: translateY(-2px);
    }
  }

  .user-name {
    font-family: "Spotify Circular Cyrillic", sans-serif;
    font-size: var(--fs-14);
    transform: translateY(2px);
  }

  .user-arrow {
    margin-right: 0.6rem;
  }

  .user-button.active .user-arrow > svg {
    transform: rotate(180deg);
  }

  .dropdown-container {
    position: absolute;
    top: calc(100% + 0.8rem);
    right: 0;
    padding: 4px;
    min-width: 196px;
    border-radius: 2px;
    background-color: var(--gray3);
    box-shadow: 0 16px 24px rgb(0 0 0 / 30%), 0 6px 8px rgb(0 0 0 / 20%);
    opacity: 0;
    visibility: hidden;
    z-index: 1000;
  }

  .dropdown-container.active {
    visibility: visible;
    opacity: 1;
  }

  .dropdown-item button {
    display: flex;
    justify-content: space-between;
    padding: 1.2rem 0.8rem 1.2rem 1.2rem;
    font-size: var(--fs-14);
    line-height: var(--lh-16);
    font-family: "Spotify Circular Book", sans-serif;
    color: var(--white-op-09);
    width: 100%;
    border-radius: 2px;

    :hover {
      background-color: var(--white-op-01);
    }
  }
`