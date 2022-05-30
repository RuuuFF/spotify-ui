import styled from "styled-components"

const Section = props => {
  return (
    <SectionContainer>
      <div className="header">
        <h2 className="title">
          <a href={props.path || "/"} onClick={e => e.preventDefault()}>{props.title}</a>
        </h2>
        <div className="more">
          <a href={props.path || "/"} onClick={e => e.preventDefault()}>See All</a>
        </div>
      </div>

      <div className="cards">
        {props.children}
      </div>
    </SectionContainer>
  )
}

export default Section

const SectionContainer = styled.section`
  margin-bottom: 1.6rem;

  .header {
    display: flex;
    justify-content: space-between;
    height: 3.3rem;
    margin-bottom: 1.6rem;
  }

  .title {
    font-size: var(--fs-24);
    line-height: var(--lh-28);
    letter-spacing: -0.04em;
    margin-top: 3px;

    a:hover {
      text-decoration: underline;
    }
  }

  .more {
    display: none;

    a {
      align-self: flex-end;
      justify-self: flex-end;
      display: inline-block;
      padding: 4px 0;
      color: var(--gray);
      font-size: var(--fs-12);
      line-height: var(--lh-16);
      letter-spacing: 1.2px;
      text-transform: uppercase;

      :hover {
        text-decoration: underline;
      }
    }
  }

  @media (max-width: 1480px) {
    .more {
      display: flex;
    }
  }

  .cards {
    display: grid;
    grid-template-columns: repeat(5, 18.15rem);
    grid-auto-rows: 25.95rem;
    gap: 2.4rem;
  }

  @media (max-width: 1480px) {
    .cards {
      grid-template-columns: repeat(5, 19.4rem);
      grid-auto-rows: 27.2rem;
    }
  }
`