import styled from "styled-components";

export const Container = styled.div`
  grid-column: 2;
  grid-row: 1;
  background-color: var(--black2);
  overflow-y: scroll;

  ::-webkit-scrollbar {
    width: 12px;
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
  padding: 8.8rem 3.2rem 3.2rem;

  .main-section {
    display: flex;
    flex-direction: column;

    .main-section-header {
      display: flex;
      height: 4.2rem;
      align-items: center;
      margin-bottom: 1.6rem;
  
      .main-section-title {
        color: var(--white);
        font-size: var(--fs-32);
        line-height: var(--lh-36);
        letter-spacing: -0.04em;
      }
    }
  }
`