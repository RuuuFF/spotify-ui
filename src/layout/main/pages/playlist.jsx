import styled from "styled-components"
import Icons from "../../../components/icons"

const Playlist = ({ playlist, image }) => {
  return (
    <div>
      <Header>
        <div className="image-container">
          {image ? (
            <img src={image} alt="Playlist" />
          ) : (
            <div className="default-image">
              <Icons icon="ottava" />
            </div>
          )}
        </div>
        <div className="info-container">
          <h2>Playlist</h2>
          <div>
            <h1>{playlist.name}</h1>
          </div>
          <div>
            <a className="user" href="/" onClick={e => e.preventDefault()}>ruuuff</a>
          </div>
        </div>
      </Header>
    </div>
  )
}

export default Playlist

const Header = styled.header`
  position: relative;
  display: flex;
  padding: 8.4rem 3.2rem 2.4rem;
  background-color: rgb(83, 83, 83);
  z-index: 1;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(transparent 0,rgba(0,0,0,.5) 100%);
    z-index: -1;
  }

  .image-container {
    width: 23.2rem;
    height: 23.2rem;
    box-shadow: 0 4px 60px rgb(0 0 0 / 50%);
    margin-right: 2.4rem;

    .default-image {
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      overflow: hidden;
      color: var(--gray2);
      background-color: var(--gray3);
      color: #7f7f7f;

      & > * {
        width: 6.4rem;
        transform: translateY(-4px);
      }
    }
  }

  .info-container {
    display: flex;
    align-self: flex-end;
    flex-direction: column;
    flex: 1;
    overflow: hidden;

    h2 {
      font-size: var(--fs-12);
      line-height: var(--lh-16);
      color: var(--white);
      text-transform: uppercase;
    }

    h1 {
      font-family: "Spotify Circular Bold", sans-serif;
      font-weight: 900;
      font-size: var(--fs-96);
      line-height: var(--fs-96);
      color: var(--white);
      letter-spacing: -5px;
      padding: 0.7rem 0;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
      user-select: none;
      cursor: pointer;
    }

    .user {
      display: inline-block;
      margin-top: 0.8rem;
      line-height: var(--lh-16);
      font-size: var(--fs-14);
      user-select: none;
      transform: translateY(2px);

      &:hover {
        text-decoration: underline;
      }
    }
  }
`