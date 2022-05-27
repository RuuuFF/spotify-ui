import styled from "styled-components"
import Icons from "./icons"

const CardWide = props => {
  return (
    <Container>
      <a href="/" onClick={event => event.preventDefault()}>
        <div className="card-image-container">
          {props.image ? (
            <img className="card-image" src={props.image} alt={props.title} />
          ) : (
            <div className="default-card-image">
              <Icons icon="ottava" />
            </div>
          )}
        </div>
        <div className="card-info-container">
          <p className="card-title">{props.title}</p>
        </div>
        <div className="card-btn-container">
          <button className="card-btn">
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

  :hover {
    background-color: var(--white-op-02);

    .card-btn {
      opacity: 1;
    }
  }

  > a {
    display: flex;
    align-items: center;
    padding-right: 1.6rem;
    gap: 1.6rem;

    .card-image-container {
      width: 8rem;
      height: 8rem;

      .card-image {
        width: 100%;
        height: 100%;
        -webkit-user-drag: none;
      }

      .default-card-image {
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

    .card-info-container {
      flex: 1;
      height: 100%;
      
      .card-title {
        font-size: var(--fs-16);
        line-height: var(--lh-24);
        margin-bottom: -3px;
      }
    }

    .card-btn {
      transition: opacity .3s ease;
      opacity: 0;
    }
  }
`