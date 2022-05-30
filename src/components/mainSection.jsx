import styled from "styled-components"

const MainSection = props => {
  function getGreeting() {
    const hourNow = new Date().getHours()

    if (hourNow >= 5 && hourNow < 12) {
      return "Good morning"
    } else if (hourNow >= 12 && hourNow < 18) {
      return "Good afternoon"
    } else {
      return "Good evening"
    }
  }

  return (
    <SectionContainer>
      <div className="main-section-header">
        <h2 className="main-section-title">{getGreeting()}</h2>
      </div>
      <div className="main-section-cards">
        {props.children}
      </div>
    </SectionContainer>
  )
}

export default MainSection

const SectionContainer = styled.section`
  display: flex;
  flex-direction: column;
  margin-bottom: 1.6rem;

  .main-section-header {
    display: flex;
    height: 4.2rem;
    align-items: center;
    margin-bottom: 1.8rem;
  }

  .main-section-title {
    color: var(--white);
    font-size: var(--fs-32);
    line-height: var(--lh-36);
    letter-spacing: -0.04em;
  }

  .main-section-cards {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1.6rem 2.4rem;
  }
`