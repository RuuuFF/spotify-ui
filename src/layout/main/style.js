import styled from "styled-components";

export const Container = styled.div`
  grid-column: 2;
  grid-row: 1;
  background-color: var(--black2);
  overflow-y: overlay;

  ::-webkit-scrollbar {
    width: 12px;
    max-height: 50%;
  }
  
  ::-webkit-scrollbar-thumb {
    background: rgba(255, 255, 255, 0.3);
  }
  
  ::-webkit-scrollbar-thumb:hover {
    background: rgba(255, 255, 255, 0.5);
  }

  ::-webkit-scrollbar-track-piece {
    margin-top: 64px;
  }
`

export const MainContent = styled.main`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
  padding: 8.8rem 3.2rem 3.2rem;

  .main-section {
    display: flex;
    flex-direction: column;
    margin-bottom: 1.6rem;

    .main-section-header {
      display: flex;
      height: 4.2rem;
      align-items: center;
      margin-bottom: 1.8rem;
  
      .main-section-title {
        color: var(--white);
        font-size: var(--fs-32);
        line-height: var(--lh-36);
        letter-spacing: -0.04em;
      }
    }

    .main-section-cards {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 1.6rem 2.4rem;
    }
  }

  .first-section {
    .first-section-header {
      height: 3.3rem;

      .first-section-title {
        font-size: var(--fs-24);
        line-height: var(--lh-28);
        letter-spacing: -0.04em;
        margin-top: 3px;
  
        &:hover > a {
          text-decoration: underline;
        }
      }
    }

    .first-section-cards {
      display: grid;
      grid-template-columns: repeat(5, 1fr);
      grid-auto-rows: 27.2rem;
      gap: 2.4rem;
    }
  }
`