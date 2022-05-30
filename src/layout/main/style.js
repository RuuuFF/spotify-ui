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
`