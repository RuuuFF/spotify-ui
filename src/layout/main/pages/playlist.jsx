import { useRef, useState } from "react"
import styled from "styled-components"
import Icons from "../../../components/icons"

const Playlist = ({ playlist }) => {
  const [value, setValue] = useState("")
  const inputRef = useRef(null)

  return (
    <>
      <Container>
        <Header>
          <div className="image-container">
            {playlist.imageUrl ? (
              <img src={playlist.imageUrl} alt="Playlist" />
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

        <Wrapper>
          <div className="paddingAround">
            <div>
              <button className="btn">
                <Icons icon="ellipsis" />
              </button>
            </div>
          </div>

          <div className="sidePadding">
            <section>
              <div className="input-wrapper">
                <div className="title-container">
                  <h1>Let's find something for your playlist</h1>
                </div>
                <div className="input-container">
                  <input
                    type="text"
                    placeholder="Search for songs or episodes"
                    value={value}
                    ref={inputRef}
                    onChange={event => setValue(event.target.value)} />

                  <div
                    className="input-search-icon"
                    onClick={() => inputRef.current.focus()}>
                    <Icons icon="search-mini" />
                  </div>
                  {value !== "" ? (
                    <button
                      className="erase-input-icon"
                      onClick={() => setValue("")}>
                      <Icons icon="xmark-mini" />
                    </button>
                  ) : false}
                </div>
              </div>

              <div className="erase-section-container">
                <button className="erase-section-button">
                  <Icons icon="xmark-large" />
                </button>
              </div>
            </section>
          </div>
        </Wrapper >
      </Container >

      <Modal>
        Teste
      </Modal>
    </>
  )
}

export default Playlist

const Container = styled.main`
  min-height: 88.1rem;
  overflow-y: auto;
  overflow-x: hidden;
  padding-bottom: 3.2rem;
`

const Header = styled.header`
  position: relative;
  display: flex;
  padding: 8.4rem 3.2rem 2.4rem;
  background-color: rgb(83, 83, 83);
  min-height: calc(((100vh - 64px) - 90px) - 519px);
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

    img {
      width: 100%;
    }

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

const Wrapper = styled.div`
  background-image: linear-gradient(to bottom, rgba(83, 83, 83, 0.25), transparent 90%);

  &::before {
    position: absolute;
    inset: 0 0 auto 0;
  }

  .paddingAround {
    padding: 2.4rem 3.2rem;
  }

  .btn {
    color: var(--white-op-06);

    &:hover {
      color: var(--white);
    }
  }

  .sidePadding {
    padding: 0 3.2rem;
  }

  section {
    padding: 2.4rem 0;
    margin-top: 2.4rem;
    border-top: 1px solid var(--white-op-01);

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }

  .input-wrapper {
    display: flex;
    flex-direction: column;

    h1 {
      color: var(--white);
      font-size: var(--fs-24);
      line-height: var(--lh-28);
      letter-spacing: -0.96px;
      margin-bottom: 1.4rem;
    }
  }

  .input-container {
    position: relative;

    input {
      background-color: var(--white-op-01);
      color: var(--white-op-07);
      font-size: var(--fs-14);
      font-family: "Spotify Circular Book", sans-serif;
      width: 100%;
      height: 4.0rem;
      padding: 0.8rem 3.2rem;
      border-radius: 0.4rem;
      border: 0;
      text-overflow: ellipsis;
      
      &:focus {
        outline: none;
      }

      &::placeholder {
        color: var(--white-op-07);
      }
    }

    .input-search-icon, .erase-input-icon {
      position: absolute;
      transform: translateY(-50%);
      color: var(--white-op-07);
    }

    .input-search-icon {
      left: 1rem;
      top: 54%;
    }

    .erase-input-icon {
      right: 1rem;
      top: 50%;
    }
  }

  .erase-section-button {
    margin-right: 0.8rem;
    color: var(--white-op-07);
  }
`

const Modal = styled.div`
  position: fixed;
  inset: 0;
  background-color: var(--black-op-07);
  z-index: 100;
`