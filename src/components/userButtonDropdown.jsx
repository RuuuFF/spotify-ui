import styled from "styled-components"
import { connect } from "react-redux"
import { bindActionCreators } from "@reduxjs/toolkit"
import { toggleUserDropdown } from "../store/structureSlice"
import Icons from "./icons"

const UserButtonDropdown = ({ userDropdown, toggleUserDropdown }) => (
  <Container>
    <button
      className={`user-button ${userDropdown ? "active" : ""}`}
      onClick={() => toggleUserDropdown()}>
      <div className="user-image">
        <svg role="img" height="16" width="16" viewBox="0 0 16 16" fill="var(--white)"><path d="M6.233.371a4.388 4.388 0 015.002 1.052c.421.459.713.992.904 1.554.143.421.263 1.173.22 1.894-.078 1.322-.638 2.408-1.399 3.316l-.127.152a.75.75 0 00.201 1.13l2.209 1.275a4.75 4.75 0 012.375 4.114V16H.382v-1.143a4.75 4.75 0 012.375-4.113l2.209-1.275a.75.75 0 00.201-1.13l-.126-.152c-.761-.908-1.322-1.994-1.4-3.316-.043-.721.077-1.473.22-1.894a4.346 4.346 0 01.904-1.554c.411-.448.91-.807 1.468-1.052zM8 1.5a2.888 2.888 0 00-2.13.937 2.85 2.85 0 00-.588 1.022c-.077.226-.175.783-.143 1.323.054.921.44 1.712 1.051 2.442l.002.001.127.153a2.25 2.25 0 01-.603 3.39l-2.209 1.275A3.25 3.25 0 001.902 14.5h12.196a3.25 3.25 0 00-1.605-2.457l-2.209-1.275a2.25 2.25 0 01-.603-3.39l.127-.153.002-.001c.612-.73.997-1.52 1.052-2.442.032-.54-.067-1.097-.144-1.323a2.85 2.85 0 00-.588-1.022A2.888 2.888 0 008 1.5z"></path></svg>
      </div>
      <div className="user-name">
        <span>ruuuff</span>
      </div>
      <div className="user-arrow">
        <svg role="img" height="16" width="16" viewBox="0 0 16 16" fill="var(--white)"><path d="M14 6l-6 6-6-6h12z"></path></svg>
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