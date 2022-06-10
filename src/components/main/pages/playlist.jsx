import { useEffect, useRef, useState } from "react"

import { connect } from "react-redux"
import { bindActionCreators } from "@reduxjs/toolkit"
import { updatePlaylistItem } from "../../../store/spotifySlice"

import Icons from "../../../components/icons"
import ModalInput from "../modalInput"
import styled from "styled-components"

const Playlist = ({ playlist, updatePlaylistItem }) => {
  const [showModal, setShowModal] = useState(false)
  const [name, setName] = useState("")
  const [imageUrl, setImageUrl] = useState("")
  const [description, setDescription] = useState("")
  const [search, setSearch] = useState("")

  const nameRef = useRef(null)
  const imageRef = useRef(null)
  const descriptionRef = useRef(null)
  const searchRef = useRef(null)

  function savePlaylist() {
    toggleModal()
    updatePlaylistItem({
      newPlaylist: { name, imageUrl, description },
      index: playlist.index
    })
  }

  function pressEnter(event) {
    if (event.key === "Enter" && !event.shiftKey) {
      savePlaylist()
    }
  }

  function toggleModal(element) {
    setShowModal(!showModal)
    if (element) setTimeout(() => element.select(), 10)
  }

  useEffect(() => {
    setName(playlist.name || "")
    setImageUrl(playlist.imageUrl || "")
    setDescription(playlist.description || "")
  }, [playlist, showModal])

  return (
    <>
      <Container>
        <Header>
          <div className="image-container" onClick={() => toggleModal(imageRef.current)}>
            {playlist.imageUrl ? (
              <img src={playlist.imageUrl} alt="Playlist" />
            ) : (
              <div className="default-image">
                <Icons icon="ottava" />
              </div>
            )}
            <div
              className="choose-photo"
              style={{ backgroundColor: playlist.imageUrl ? "var(--black-op-07)" : "var(--gray3)" }}>
              <div>
                <Icons icon="pen" />
                <span>Choose photo</span>
              </div>
            </div>
          </div>
          <div className="info-container">
            <h2>Playlist</h2>
            <div>
              <button
                className="playlist-name-btn"
                onClick={() => toggleModal(nameRef.current)}>
                <h1>{playlist.name}</h1>
              </button>
            </div>
            {playlist.description ? (
              <div>
                <button
                  className="playlist-description-btn"
                  onClick={() => toggleModal(descriptionRef.current)}>
                  <p className="description">{playlist.description}</p>
                </button>
              </div>
            ) : false}
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
                    value={search}
                    ref={searchRef}
                    onChange={event => setSearch(event.target.value)} />

                  <div
                    className="input-search-icon"
                    onClick={() => searchRef.current.focus()}>
                    <Icons icon="search-mini" />
                  </div>
                  {search !== "" ? (
                    <button
                      className="erase-input-icon"
                      onClick={() => setSearch("")}>
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

      <Modal className={`${showModal ? "visible" : ""}`}>
        <div className="wrapper">
          <div className="modal-container">
            <header className="modal-header">
              <h1>Edit details</h1>
              <button onClick={() => toggleModal()}>
                <Icons icon="xmark-mini" />
              </button>
            </header>

            <div className="update-container">
              <div className="image-container" onClick={() => imageRef.current.select()}>
                {playlist.imageUrl ? (
                  <img src={playlist.imageUrl} alt="Playlist" />
                ) : (
                  <div className="default-image">
                    <Icons icon="ottava" />
                  </div>
                )}
                <div
                  className="choose-photo"
                  style={{ backgroundColor: playlist.imageUrl ? "var(--black-op-07)" : "var(--gray3)" }}>
                  <div>
                    <Icons icon="pen" />
                    <span>Choose photo</span>
                  </div>
                </div>
              </div>

              <div className="input-container">
                <ModalInput
                  name="Name"
                  value={name}
                  maxLength={100}
                  reference={nameRef}
                  onKeyDown={pressEnter}
                  onChange={setName}
                  placeholder="Add a name" />
                <ModalInput
                  name="Image"
                  type="url"
                  value={imageUrl}
                  maxLength={300}
                  reference={imageRef}
                  onKeyDown={pressEnter}
                  onChange={setImageUrl}
                  placeholder="Add an optional photo (URL)" />
                <ModalInput
                  name="Description"
                  element="textarea"
                  value={description}
                  maxLength={300}
                  reference={descriptionRef}
                  onKeyDown={pressEnter}
                  onChange={setDescription}
                  placeholder="Add an optional description" />
              </div>
            </div>

            <div className="button-container">
              <button className="btn" onClick={savePlaylist}>Save</button>
            </div>

            <div className="advice-container">
              <span className="advice">By proceeding, you agree to give Spotify access to the image you choose to upload. Please make sure you have the right to upload the image.</span>
            </div>
          </div>
        </div>
      </Modal>
    </>
  )
}

const mapDispatchToProps = dispatch => bindActionCreators({ updatePlaylistItem }, dispatch)
export default connect(null, mapDispatchToProps)(Playlist)

const Container = styled.main`
  display: flex;
  flex-direction: column;
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
    position: relative;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      -webkit-user-drag: none;
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

    .choose-photo {
      position: absolute;
      inset: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: var(--gray3);
      color: var(--white);
      opacity: 0;

      > div {
        transform: translateY(8px);
        text-align: center;
      }
      
      span {
        display: block;
        margin-top: 1px;
        font-size: var(--fs-16);
        line-height: var(--lh-24);
        font-family: "Spotify Circular Book", sans-serif;
        user-select: none;
      }
    }

    &:hover .choose-photo {
      opacity: 1;
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
    
    .playlist-name-btn {
      cursor: pointer;
      width: 100%;

      h1 {
        font-family: "Spotify Circular Bold", sans-serif;
        font-weight: 900;
        text-align: left;
        letter-spacing: -5px;
        font-size: var(--fs-96);
        line-height: var(--fs-96);
        color: var(--white);
        user-select: none;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
        padding: 0.7rem 0.7rem 0.7rem 0;
      }
    }

    .playlist-description-btn {
      margin-top: 0.8rem;
      cursor: pointer;
      width: 100%;
    }

    .description {
      font-size: var(--fs-16);
      line-height: var(--lh-24);
      color: var(--white-op-07);
      word-break: break-all;
      text-align: left;
      font-family: "Spotify Circular Book", sans-serif;
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
  position: relative;
  flex: 1;

  &::before {
    content: "";
    background-image: linear-gradient(to bottom, rgba(83, 83, 83, 0.25), transparent 80%);
    position: absolute;
    inset: 0 0 auto 0;
    height: 20rem;
    z-index: -1;
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
  visibility: hidden;
  opacity: 0;
  z-index: 100;

  &.visible {
    opacity: 1;
    visibility: visible;
  }

  .wrapper {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .modal-container {
    background-color: var(--gray3);
    padding: 2.4rem;
    border-radius: 0.8rem;
    box-shadow: 0 4px 4px rgb(0 0 0 / 30%);
    color: var(--white);
    min-height: 384px;
    width: 524px;
  }

  .modal-header {
    display: flex;
    flex-direction: row;
    margin-bottom: 2.4rem;
    justify-content: space-between;

    h1 {
      font-size: var(--fs-24);
      line-height: var(--lh-28);
      letter-spacing: -0.96px;
      transform: translateY(3px);
    }

    button {
      color: var(--white-op-07);
      width: 3.2rem;
      height: 3.2rem;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: -0.4rem -0.8rem 0 0;
      border-radius: 3.2rem;

      &:hover {
        background-color: var(--white-op-01);
      }
    }
  }

  .update-container {
    display: flex;
    flex-direction: row;
    gap: 1.6rem;
  }

  .image-container {
    width: 18rem;
    height: 18rem;
    box-shadow: 0 4px 60px rgb(0 0 0 / 50%);
    position: relative;
    overflow: hidden;

    & > img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      -webkit-user-drag: none;
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

    .choose-photo {
      position: absolute;
      inset: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: var(--gray3);
      color: var(--white);
      opacity: 0;

      > div {
        transform: translateY(8px);
        text-align: center;
      }
      
      span {
        display: block;
        margin-top: 1px;
        font-size: var(--fs-16);
        line-height: var(--lh-24);
        font-family: "Spotify Circular Book", sans-serif;
        user-select: none;
      }
    }

    &:hover .choose-photo {
      opacity: 1;
    }
  }

  .input-container {
    display: flex;
    flex-direction: column;
    gap: 1.6rem;
    flex: 1;

  }

  .input-wrapper:last-child {
    flex: 1;
  }

  .button-container {
    display: flex;
    justify-content: flex-end;
    margin: 0.8rem 0;

    .btn {
      padding: 1.2rem 3.2rem;
      font-size: var(--fs-16);
      line-height: var(--lh-24);
      font-family: "Spotify Circular Cyrillic";
      background-color: var(--white);
      border-radius: 500px;

      &:hover {
        transform: scale(1.04);
      }

      &:active {
        transform: scale(1);
        background-color: var(--white-op-07);
      }
    }
  }

  .advice {
    color: var(--white);
    font-size: var(--fs-11);
    line-height: var(--lh-16);
  }
`