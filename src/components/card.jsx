import styled from "styled-components"

const Card = props => {
  return (
    <Container>
      <a href="/" onClick={event => event.preventDefault()}>
        <div className="card-image-container">
          <img className="card-image" src={props.image} alt={props.title} />
        </div>
        <div className="card-info-container">
          <p className="card-title">{props.title}</p>
        </div>
      </a>
    </Container>
  )
}

export default Card

const Container = styled.article`
  background-color: var(--white-op-01);
  border-radius: 4px;
  overflow: hidden;
  transition: background-color .3s ease;

  :hover {
    background-color: var(--white-op-02);
  }

  > a {
    display: flex;
    align-items: center;

    .card-image-container {
      width: 8rem;
      height: 8rem;

      .card-image {
        width: 100%;
        height: 100%;
      }
    }
  }
`