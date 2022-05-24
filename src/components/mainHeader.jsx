import styled from "styled-components"
import Icons from "./icons"

const MainHeader = props => (
  <Header bg="rgba(92, 65, 10, 1)">
    <div className="buttons-container">
      <button className="btn left" disabled>
        <Icons icon="arrow-large" />
      </button>
      <button className="btn right" disabled>
        <Icons icon="arrow-large" />
      </button>
    </div>

    <button className="user-widget-button">
      <div className="user-widget-image">
        <svg role="img" height="16" width="16" viewBox="0 0 16 16" fill="var(--white)"><path d="M6.233.371a4.388 4.388 0 015.002 1.052c.421.459.713.992.904 1.554.143.421.263 1.173.22 1.894-.078 1.322-.638 2.408-1.399 3.316l-.127.152a.75.75 0 00.201 1.13l2.209 1.275a4.75 4.75 0 012.375 4.114V16H.382v-1.143a4.75 4.75 0 012.375-4.113l2.209-1.275a.75.75 0 00.201-1.13l-.126-.152c-.761-.908-1.322-1.994-1.4-3.316-.043-.721.077-1.473.22-1.894a4.346 4.346 0 01.904-1.554c.411-.448.91-.807 1.468-1.052zM8 1.5a2.888 2.888 0 00-2.13.937 2.85 2.85 0 00-.588 1.022c-.077.226-.175.783-.143 1.323.054.921.44 1.712 1.051 2.442l.002.001.127.153a2.25 2.25 0 01-.603 3.39l-2.209 1.275A3.25 3.25 0 001.902 14.5h12.196a3.25 3.25 0 00-1.605-2.457l-2.209-1.275a2.25 2.25 0 01-.603-3.39l.127-.153.002-.001c.612-.73.997-1.52 1.052-2.442.032-.54-.067-1.097-.144-1.323a2.85 2.85 0 00-.588-1.022A2.888 2.888 0 008 1.5z"></path></svg>
      </div>
      <div className="user-widget-name">
        <span>ruuuff</span>
      </div>
      <div className="user-widget-arrow">
        <svg role="img" height="16" width="16" viewBox="0 0 16 16" fill="var(--white)"><path d="M14 6l-6 6-6-6h12z"></path></svg>
      </div>
    </button>
  </Header>
)

export default MainHeader

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  padding: 1.6rem 3.2rem;
  background-color: ${props => props.bg ? props.bg : "transparent"};
  z-index: 10;

  .buttons-container {
    display: flex;
    gap: 1.6rem;

    .btn {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 3.2rem;
      height: 3.2rem;
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

  .user-widget-button {
    display: flex;
    align-items: center;
    background-color: var(--black-op-07);
    color: var(--white);
    border-radius: 23px;
    padding: 0.2rem;
    gap: 0.8rem;
    cursor: pointer;

    .user-widget-image {
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

    .user-widget-name {
      font-family: "Spotify Circular Cyrillic", sans-serif;
      font-size: var(--fs-14);
      transform: translateY(2px);
    }

    .user-widget-arrow {
      margin-right: 0.6rem;
    }
  }
`