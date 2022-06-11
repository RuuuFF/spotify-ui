import { useRef, useState } from "react"
import Icons from "../../icons"
import styled from "styled-components"

const PlaylistContent = props => {
  const [search, setSearch] = useState("")
  const searchRef = useRef(null)

  return (
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
  )
}

export default PlaylistContent

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