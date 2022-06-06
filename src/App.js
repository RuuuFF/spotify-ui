import styled from "styled-components";

import Sidebar from "./layout/sidebar";
import Main from "./layout/main";
import Footer from "./layout/footer";

import { BrowserRouter } from "react-router-dom";

const App = props => (
  <BrowserRouter>
    <Container>
      <Sidebar />
      <Main />
      <Footer />
    </Container>
  </BrowserRouter>
);

export default App;

export const Container = styled.div`
  display: grid;
  grid-template-columns: 23.6rem auto;
  grid-template-rows: auto 9.1rem;
  height: 100vh;
  width: 100%;
`