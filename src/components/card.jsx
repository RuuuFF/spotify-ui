import styled from "styled-components"
import Icons from "./icons"

const Card = props => {
  return (
    <Container>
      <a href="/" onClick={event => event.preventDefault()}>
        <div className="card-image-container">
          {props.image && props.player ? (
            <>
              <img className="card-image" src={props.image} alt={props.title} />
              <div className="card-btn-container">
                <button className="card-btn">
                  <Icons icon="green-play" />
                </button>
              </div>
            </>
          ) : props.player ? (
            <>
              <div className="default-card-image">
                <Icons icon="ottava" />
              </div>
              <div className="card-btn-container">
                <button className="card-btn">
                  <Icons icon="green-play" />
                </button>
              </div>
            </>
          ) : (
            <div className="default-card-image">
              <Icons icon="ottava" />
            </div>
          )}
        </div>
        <div className="card-info-container">
          <p className="card-title">{props.title}</p>
          {props.description ? (
            <p className="card-description">{props.description}</p>
          ) : false}
        </div>
      </a>
    </Container>
  )
}

export default Card

const Container = styled.article`
  background-color: var(--black3);
  height: 100%;
  border-radius: 4px;
  overflow: hidden;
  transition: background-color .3s ease;
  
  > a {
    display: inline-block;
    padding: 1.6rem;
  }

  .card-image-container {
    margin-bottom: 1.6rem;
    position: relative;
    box-shadow: 0 8px 24px rgb(0 0 0 / 50%);

    .default-card-image {
      width: 16.2rem;
      height: 16.2rem;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: var(--gray3);
    }

    .card-btn-container {
      position: absolute;
      bottom: 0.8rem;
      right: 0.8rem;
      
      .card-btn {
        transform: translateY(8px);
        opacity: 0;
        cursor: pointer;
        transition: 0.3s ease;
      }
    }
  }

  .card-info-container {
    .card-title {
      font-size: var(--fs-16);
      line-height: var(--lh-24);
    }
    
    .card-description {
      font-size: var(--fs-14);
      line-height: var(--lh-16);
      font-family: "Spotify Circular Book";
      margin-top: 4px;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      // Limita o numero de linhas do container
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    }
  }

  :hover {
    background-color: var(--gray3);

    .card-image-container .card-btn-container .card-btn {
      opacity: 1;
      transform: translateY(0);
    }
  }
`