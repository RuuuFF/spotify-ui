import { Container } from "./styles";

import Sidebar from "../layout/sidebar";
import MainContent from "../layout/mainContent";
import Player from "../layout/player";

const App = props => (
  <Container>
    <Sidebar />
    <MainContent />
    <Player />
  </Container>
);

export default App;