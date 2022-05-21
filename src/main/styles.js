import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 24.1rem auto;
  grid-template-rows: auto 9.1rem;

  @media (max-width: 1480px) {
    grid-template-columns: 23.6rem auto;
  }
`