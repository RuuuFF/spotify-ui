import styled from "styled-components"
import Icons from "./icons"

const CardWide = props => {
  return (
    <Container>
      <a href={props.path || "/"} onClick={event => event.preventDefault()}>
        <div className="image-container">
          {props.image ? (
            <img className="image" src={props.image} alt={props.name} />
          ) : (
            <div className="default-image">
              <Icons icon="ottava" />
            </div>
          )}
        </div>
        <div className="info-container">
          <p className="name">{props.name}</p>
        </div>
        <div className="btn-container">
          <button className="btn">
            <Icons icon="green-play" />
          </button>
        </div>
      </a>
    </Container>
  )
}

export default CardWide

const Container = styled.article`
  background-color: var(--white-op-01);
  border-radius: 4px;
  overflow: hidden;
  transition: background-color .3s ease;

  > a {
    display: flex;
    align-items: center;
    padding-right: 1.6rem;
    gap: 1.6rem;
  }

  .image-container {
    width: 8rem;
    height: 8rem;

    .image {
      width: 100%;
      height: 100%;
      -webkit-user-drag: none;
    }

    .default-image {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 100%;
      background-color: var(--gray3);

      > svg {
        width: 27.58%;
        height: 27.58%;
      }
    }
  }

  .info-container {
    flex: 1;
  }

  .name {
    font-size: var(--fs-16);
    line-height: var(--lh-24);
    margin-bottom: -3px;
  }

  .btn {
    transition: opacity .3s ease;
    opacity: 0;
    cursor: pointer;
  }

  :hover {
    background-color: var(--white-op-02);

    .btn {
      opacity: 1;
    }
  }
`